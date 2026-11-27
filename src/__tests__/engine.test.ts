import { describe, expect, it } from 'vitest';
import { DISHES } from '../data/dishes';
import { INGREDIENT_BY_ID } from '../data/ingredients';
import { resolveIngredient, resolveMany, normalizeText } from '../engine/normalize';
import { portionsOf, roundQty, scaleIngredient } from '../engine/scale';
import { shoppingList, suggestDishes } from '../engine/suggest';
import { mealTargets } from '../engine/targets';
import { newProfile } from '../profiles/store';
import type { Profile } from '../types';

const adults = (n: number) => ({ adults: n, children: 0 });

describe('catalogue et plats', () => {
  it('chaque ingrédient cité par un plat existe dans le catalogue', () => {
    for (const dish of DISHES) {
      for (const ing of dish.ingredients) {
        expect(INGREDIENT_BY_ID[ing.ingredient], `${dish.id} -> ${ing.ingredient}`).toBeDefined();
      }
    }
  });

  it('les identifiants de plats sont uniques', () => {
    const ids = DISHES.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('un plat ne revendique pas un régime que ses ingrédients contredisent', () => {
    for (const dish of DISHES) {
      const ings = dish.ingredients.map((i) => INGREDIENT_BY_ID[i.ingredient]);
      if (dish.diet.includes('sans-porc') || dish.diet.includes('halal')) {
        expect(ings.some((i) => i.containsPork), `${dish.id} contient du porc`).toBe(false);
      }
      if (dish.diet.includes('vegetarien')) {
        expect(ings.some((i) => i.category === 'viande' || i.category === 'poisson'), `${dish.id} contient de la viande ou du poisson`).toBe(false);
      }
      if (dish.diet.includes('vegan')) {
        expect(ings.some((i) => i.containsAnimal), `${dish.id} n'est pas vegan`).toBe(false);
      }
      if (dish.diet.includes('sans-gluten')) {
        expect(ings.some((i) => i.containsGluten), `${dish.id} contient du gluten`).toBe(false);
      }
      if (dish.diet.includes('sans-lactose')) {
        expect(ings.some((i) => i.containsLactose), `${dish.id} contient du lactose`).toBe(false);
      }
    }
  });
});

describe('normalisation', () => {
  it('reconnaît les synonymes italiens et tunisiens', () => {
    expect(resolveIngredient('Pomodoro')).toBe('tomate');
    expect(resolveIngredient('banadoura')).toBe('tomate');
    expect(resolveIngredient('Tonno')).toBe('thon');
    expect(resolveIngredient('Œufs')).toBe('oeuf');
    expect(resolveIngredient('tomates')).toBe('tomate');
  });

  it('ignore les libellés inconnus et dédoublonne', () => {
    expect(resolveMany(['pomodoro', 'tomate', 'xyz', ''])).toEqual(['tomate']);
    expect(normalizeText('  Câpres !  ')).toBe('capres');
  });
});

describe('portions et quantités', () => {
  it('compte les enfants en demi-portion', () => {
    expect(portionsOf({ adults: 2, children: 2 })).toBe(3);
  });

  it('arrondit à des valeurs cuisinables', () => {
    expect(roundQty(87, 'g')).toBe(85);
    expect(roundQty(0.2, 'piece')).toBe(0.5);
    expect(roundQty(143, 'ml')).toBe(140);
  });

  it('double les quantités pour 4 personnes', () => {
    const dish = DISHES.find((d) => d.id === 'spaghetti-aglio-olio')!;
    const pates = dish.ingredients.find((i) => i.ingredient === 'pates')!;
    expect(scaleIngredient(pates, adults(4))).toBe(360);
  });
});

describe('suggestions', () => {
  const pantry = new Set(['tomate', 'pates', 'ail', 'basilic', 'huile-olive', 'oignon']);

  it('classe en premier le plat dont le frigo couvre le plus les ingrédients', () => {
    const { suggestions } = suggestDishes({
      meal: 'diner',
      guests: adults(2),
      pantry,
      profiles: [newProfile('Moi')],
    });
    expect(suggestions[0].dish.id).toBe('pasta-pomodoro-basilic');
    expect(suggestions[0].missing).toEqual([]);
  });

  it('exclut un plat contenant un allergène déclaré, avec la raison', () => {
    const profile: Profile = newProfile('Sara', { allergies: ['poisson'] });
    const { suggestions, excluded } = suggestDishes({
      meal: 'dejeuner',
      guests: adults(1),
      pantry: new Set(['thon', 'pates', 'capre']),
      profiles: [profile],
    });
    expect(suggestions.find((s) => s.dish.id === 'pasta-tonno-capperi')).toBeUndefined();
    expect(excluded.find((e) => e.dish.id === 'pasta-tonno-capperi')?.reason).toContain('allergie');
  });

  it('n’affiche jamais un plat au porc à un profil halal', () => {
    const { suggestions } = suggestDishes({
      meal: 'diner',
      guests: adults(1),
      pantry: new Set(['lardons', 'pates', 'oeuf', 'parmesan']),
      profiles: [newProfile('Ali', { diet: ['halal'] })],
    });
    expect(suggestions.some((s) => s.dish.id === 'carbonara')).toBe(false);
  });

  it('applique le régime le plus strict du foyer', () => {
    const { suggestions } = suggestDishes({
      meal: 'diner',
      guests: adults(2),
      pantry,
      profiles: [newProfile('Moi'), newProfile('Lina', { diet: ['vegan'] })],
    });
    for (const s of suggestions) {
      expect(s.dish.diet).toContain('vegan');
    }
  });

  it('filtre le temps maximum', () => {
    const { suggestions } = suggestDishes({
      meal: 'diner',
      guests: adults(1),
      pantry,
      profiles: [newProfile('Moi')],
      maxTimeMinutes: 15,
    });
    expect(suggestions.every((s) => s.dish.timeMinutes <= 15)).toBe(true);
  });

  it('liste de courses : seulement les manquants, quantités pour le nombre de portions', () => {
    const dish = DISHES.find((d) => d.id === 'pasta-pomodoro-basilic')!;
    const list = shoppingList(dish, adults(4), new Set(['pates', 'basilic']));
    const names = list.map((l) => l.ingredient);
    expect(names).not.toContain('pates');
    expect(names).not.toContain('basilic');
    expect(list.find((l) => l.ingredient === 'tomate')!.qty).toBe(600);
  });
});

describe('cibles sportives', () => {
  it('pas de cible sans poids renseigné', () => {
    expect(mealTargets(newProfile('Moi'))).toBeNull();
  });

  it('une prise de masse donne une cible protéines plus élevée que le maintien', () => {
    const base = { weightKg: 70 };
    const masse = mealTargets(newProfile('A', { ...base, goal: 'prise-de-masse' }))!;
    const maintien = mealTargets(newProfile('B', { ...base, goal: 'maintien' }))!;
    expect(masse.protein).toBeGreaterThan(maintien.protein);
  });
});
