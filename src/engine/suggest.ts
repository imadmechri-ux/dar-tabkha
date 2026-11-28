import { DISHES } from '../data/dishes';
import { INGREDIENT_BY_ID } from '../data/ingredients';
import type { Dish, DietTag, MealType, Profile } from '../types';
import { type Guests, portionsOf, scaleIngredient } from './scale';
import { mealTargets, proteinFit } from './targets';
import { BASICS } from './basics';
import { seasonOf, seasonalIngredientsOf } from './season';
import type { Season } from '../types';

export { BASICS } from './basics';

export interface SuggestInput {
  meal: MealType;
  guests: Guests;
  /** Ids d'ingrédients disponibles (frigo + garde-manger). */
  pantry: Set<string>;
  /** Membres du foyer qui mangent. */
  profiles: Profile[];
  /** Temps maximum en minutes, facultatif. */
  maxTimeMinutes?: number;
  /** Nombre de suggestions à renvoyer. */
  limit?: number;
  /** Saison de référence (par défaut : la saison actuelle). */
  season?: Season;
}

export interface Suggestion {
  dish: Dish;
  score: number;
  /** Part des ingrédients requis déjà disponibles, 0..1. */
  pantryCoverage: number;
  missing: string[];
  /** Membres pour qui le plat est adapté. */
  suitableFor: string[];
  /** Avertissements (épices, aliments peu appréciés, etc.). */
  warnings: string[];
  /** Le plat utilise au moins un ingrédient de saison. */
  seasonal: boolean;
  seasonalIngredients: string[];
  /** Quantités ajustées au nombre de portions. */
  quantities: { ingredient: string; qty: number; unit: string; optional: boolean }[];
}

export interface Exclusion {
  dish: Dish;
  reason: string;
}

export interface SuggestResult {
  suggestions: Suggestion[];
  excluded: Exclusion[];
}

/** Un ingrédient est-il interdit à ce profil (allergie directe ou allergène déclaré) ? */
function isAllergic(profile: Profile, ingredientId: string): boolean {
  if (profile.allergies.includes(ingredientId)) return true;
  const allergens = INGREDIENT_BY_ID[ingredientId]?.allergens ?? [];
  return allergens.some((a) => profile.allergies.includes(a));
}

/** Ce plat respecte-t-il tous les régimes demandés par ce profil ? */
function dietMissing(profile: Profile, dish: Dish): DietTag[] {
  return profile.diet.filter((tag) => !dish.diet.includes(tag));
}

export function suggestDishes(input: SuggestInput): SuggestResult {
  const { meal, guests, pantry, profiles, maxTimeMinutes, limit = 5, season = seasonOf() } = input;
  const suggestions: Suggestion[] = [];
  const excluded: Exclusion[] = [];

  for (const dish of DISHES) {
    if (!dish.mealTypes.includes(meal)) continue;

    // 1. Exclusions strictes : sécurité et régime, jamais proposées silencieusement.
    const blockers: string[] = [];
    for (const p of profiles) {
      const allergen = dish.ingredients.find((i) => isAllergic(p, i.ingredient));
      if (allergen) {
        blockers.push(`${p.name} : allergie (${INGREDIENT_BY_ID[allergen.ingredient].name})`);
        continue;
      }
      const missing = dietMissing(p, dish);
      if (missing.length) blockers.push(`${p.name} : régime non respecté (${missing.join(', ')})`);
      if (p.spiceMax < dish.spice) blockers.push(`${p.name} : trop épicé`);
    }
    if (blockers.length) {
      excluded.push({ dish, reason: blockers.join(' ; ') });
      continue;
    }
    if (maxTimeMinutes && dish.timeMinutes > maxTimeMinutes) {
      excluded.push({ dish, reason: `temps de préparation : ${dish.timeMinutes} min` });
      continue;
    }

    // 2. Couverture du frigo.
    const required = dish.ingredients.filter((i) => !i.optional && !BASICS.has(i.ingredient));
    const missing = required.filter((i) => !pantry.has(i.ingredient) && !BASICS.has(i.ingredient)).map((i) => i.ingredient);
    const pantryCoverage = required.length === 0 ? 1 : (required.length - missing.length) / required.length;

    // 3. Avertissements : aliments peu appréciés, cibles sportives.
    const warnings: string[] = [];
    for (const p of profiles) {
      const disliked = dish.ingredients.filter((i) => p.dislikes.includes(i.ingredient));
      if (disliked.length) warnings.push(`${p.name} n'aime pas : ${disliked.map((d) => INGREDIENT_BY_ID[d.ingredient].name).join(', ')}`);
    }

    // 4. Score (sur 100).
    let score = pantryCoverage * 60; // le frigo pèse le plus
    score += (1 - missing.length / Math.max(1, required.length)) * 10;

    const sportProfiles = profiles.filter((p) => p.sportRoles.length > 0);
    if (sportProfiles.length) {
      const matches = sportProfiles.filter((p) => p.sportRoles.some((r) => dish.sportRoles.includes(r))).length;
      score += (matches / sportProfiles.length) * 10;
    }

    const fits = profiles.map((p) => proteinFit(dish.nutrition.protein, mealTargets(p)));
    if (fits.length) score += (fits.reduce((a, b) => a + b, 0) / fits.length) * 10;

    score -= warnings.length * 5;
    if (dish.verified) score += 5;
    const seasonalIngredients = seasonalIngredientsOf(dish.id, season);
    if (seasonalIngredients.length) score += 8;

    const quantities = dish.ingredients.map((i) => ({
      ingredient: i.ingredient,
      qty: scaleIngredient(i, guests),
      unit: i.unit,
      optional: !!i.optional,
    }));

    suggestions.push({
      dish,
      score: Math.round(score * 10) / 10,
      pantryCoverage: Math.round(pantryCoverage * 100) / 100,
      missing,
      suitableFor: profiles.map((p) => p.name),
      seasonal: seasonalIngredients.length > 0,
      seasonalIngredients,
      warnings,
      quantities,
    });
  }

  suggestions.sort((a, b) => b.score - a.score || a.dish.timeMinutes - b.dish.timeMinutes);
  return { suggestions: suggestions.slice(0, limit), excluded };
}

/** Liste de courses : ingrédients manquants pour un plat, quantités ajustées. */
export function shoppingList(dish: Dish, guests: Guests, pantry: Set<string>) {
  const portions = portionsOf(guests);
  return dish.ingredients
    .filter((i) => !BASICS.has(i.ingredient) && !pantry.has(i.ingredient))
    .map((i) => ({
      ingredient: i.ingredient,
      name: INGREDIENT_BY_ID[i.ingredient]?.name ?? i.ingredient,
      qty: scaleIngredient(i, guests),
      unit: i.unit,
      optional: !!i.optional,
      estimatedTnd: estimatePrice(i.ingredient, i.qty * portions, i.unit),
    }));
}

/** Estimation grossière en dinars : priceHint = prix au kg (g) ou par litre (ml) ou par unité. */
function estimatePrice(ingredient: string, qty: number, unit: string): number | null {
  const hint = INGREDIENT_BY_ID[ingredient]?.priceHint;
  if (!hint) return null;
  if (unit === 'g') return Math.round((hint * qty) / 1000 * 10) / 10;
  if (unit === 'ml') return Math.round((hint * qty) / 1000 * 10) / 10;
  return null;
}
