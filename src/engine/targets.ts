import type { Goal, Nutrition, Profile } from '../types';

/**
 * Cibles nutritionnelles par repas (une estimation, pas un avis médical).
 * Basé sur le poids : protéines 1,6 g/kg/jour pour un objectif sportif, réparties sur 3 repas.
 * Sans poids renseigné : aucune cible, le critère nutritionnel est neutre.
 */
export function mealTargets(profile: Profile): Nutrition | null {
  if (!profile.weightKg) return null;
  const perKg: Record<Goal, number> = {
    maintien: 1.2,
    'perte-de-poids': 1.6,
    'prise-de-masse': 1.8,
    endurance: 1.6,
    seche: 2.0,
  };
  const protein = (profile.weightKg * perKg[profile.goal]) / 3;
  const kcalPerMeal = profile.weightKg * (profile.goal === 'prise-de-masse' ? 40 : 30) / 3;
  return {
    kcal: Math.round(kcalPerMeal),
    protein: Math.round(protein),
    carbs: Math.round(kcalPerMeal * 0.45 / 4),
    fat: Math.round(kcalPerMeal * 0.3 / 9),
  };
}

/** Score 0..1 : proximité du plat avec la cible protéines (plafonnée à 1). */
export function proteinFit(dishProtein: number, target: Nutrition | null): number {
  if (!target || target.protein === 0) return 0.5;
  return Math.min(dishProtein / target.protein, 1);
}
