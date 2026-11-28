import { DISH_BY_ID } from '../data/dishes';
import { INGREDIENT_BY_ID } from '../data/ingredients';
import type { Season } from '../types';
import { BASICS } from './basics';

/** Saison astronomique approchée, pour l'hémisphère nord (Tunisie, Europe). */
export function seasonOf(date: Date = new Date()): Season {
  const m = date.getMonth() + 1; // 1..12
  if (m >= 3 && m <= 5) return 'printemps';
  if (m >= 6 && m <= 8) return 'ete';
  if (m >= 9 && m <= 11) return 'automne';
  return 'hiver';
}

export const SEASON_LABELS: Record<Season, string> = {
  printemps: 'printemps',
  ete: 'été',
  automne: 'automne',
  hiver: 'hiver',
};

/** Ingrédients de saison présents dans un plat (hors basiques). */
export function seasonalIngredientsOf(dishId: string, season: Season): string[] {
  const dish = DISH_BY_ID[dishId];
  if (!dish) return [];
  return dish.ingredients
    .map((i) => i.ingredient)
    .filter((id) => !BASICS.has(id) && (INGREDIENT_BY_ID[id]?.seasons ?? []).includes(season));
}
