import { describe, expect, it } from 'vitest';
import { DISHES } from '../data/dishes';
import { RECIPES } from '../data/recipes';

describe('recettes détaillées', () => {
  it('chaque plat a une recette détaillée', () => {
    for (const dish of DISHES) {
      expect(RECIPES[dish.id], `recette manquante : ${dish.id}`).toBeDefined();
    }
  });

  it('chaque recette a au moins 4 étapes, des conseils et une conservation', () => {
    for (const dish of DISHES) {
      const r = RECIPES[dish.id];
      expect(r.steps.length, dish.id).toBeGreaterThanOrEqual(4);
      expect(r.tips.length, dish.id).toBeGreaterThanOrEqual(2);
      expect(r.storage.length, dish.id).toBeGreaterThan(10);
    }
  });

  it('pas de recette orpheline', () => {
    const ids = new Set(DISHES.map((d) => d.id));
    for (const key of Object.keys(RECIPES)) {
      expect(ids.has(key), `recette sans plat : ${key}`).toBe(true);
    }
  });
});
