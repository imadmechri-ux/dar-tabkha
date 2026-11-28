import type { DishIngredient } from '../types';

export interface Guests {
  adults: number;
  /** Enfants comptés en demi-portion. */
  children: number;
}

/** Nombre de portions adultes équivalentes. */
export function portionsOf(guests: Guests): number {
  return Math.max(0, guests.adults) + 0.5 * Math.max(0, guests.children);
}

/** Arrondit une quantité à une valeur cuisinable (pas de 5 g, 10 ml, demi-pièce, demi-cuillère). */
export function roundQty(value: number, unit: DishIngredient['unit']): number {
  switch (unit) {
    case 'g':
      return Math.max(5, Math.round(value / 5) * 5);
    case 'ml':
      return Math.max(10, Math.round(value / 10) * 10);
    case 'piece':
    case 'cs':
    case 'cc':
      return Math.max(0.5, Math.round(value * 2) / 2);
    case 'pincee':
      return Math.max(1, Math.round(value));
  }
}

export function scaleIngredient(ing: DishIngredient, guests: Guests): number {
  return roundQty(ing.qty * portionsOf(guests), ing.unit);
}
