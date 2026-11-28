import { describe, expect, it } from 'vitest';
import { DISHES } from '../data/dishes';
import { seasonOf, seasonalIngredientsOf } from '../engine/season';
import { suggestDishes } from '../engine/suggest';
import { newProfile } from '../profiles/store';

describe('saisons', () => {
  it('convertit le mois en saison (hémisphère nord)', () => {
    expect(seasonOf(new Date(2026, 10, 28))).toBe('automne');
    expect(seasonOf(new Date(2026, 0, 15))).toBe('hiver');
    expect(seasonOf(new Date(2026, 3, 1))).toBe('printemps');
    expect(seasonOf(new Date(2026, 6, 14))).toBe('ete');
  });

  it('un plat de saison utilise au moins un ingrédient de saison', () => {
    const seasonal = ['veloute-courge-carotte', 'gratin-courge-ricotta', 'poireaux-pois-chiches', 'salade-orange-dattes', 'pates-blettes-ricotta'];
    for (const id of seasonal) {
      expect(seasonalIngredientsOf(id, 'automne').length + seasonalIngredientsOf(id, 'hiver').length, id).toBeGreaterThan(0);
    }
  });

  it('le moteur favorise un plat de saison en automne', () => {
    const result = suggestDishes({
      meal: 'dejeuner', guests: { adults: 2, children: 0 }, pantry: new Set(['courge', 'carotte', 'oignon']),
      profiles: [newProfile('Moi')], limit: 80, season: 'automne',
    });
    const first = result.suggestions.find((s) => s.seasonal);
    expect(first).toBeDefined();
    expect(result.suggestions.some((s) => s.dish.id === 'veloute-courge-carotte' && s.seasonal)).toBe(true);
  });

  it('chaque plat de saison est bien marqué et ne l’est pas hors saison', () => {
    const summer = suggestDishes({ meal: 'diner', guests: { adults: 1, children: 0 }, pantry: new Set(), profiles: [newProfile('Moi')], limit: 80, season: 'ete' });
    const summerSeasonal = summer.suggestions.filter((s) => s.seasonal).map((s) => s.dish.id);
    expect(summerSeasonal).not.toContain('veloute-courge-carotte');
    expect(DISHES.length).toBeGreaterThan(40);
  });
});
