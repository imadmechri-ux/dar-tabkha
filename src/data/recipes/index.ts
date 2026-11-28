import { RECIPES_BREAKFAST } from './breakfast';
import { RECIPES_EXTRA } from './extra';
import { RECIPES_FUSION_SPORT } from './fusion-sport';
import { RECIPES_ITALIEN } from './italien';
import { RECIPES_TUNISIEN } from './tunisien';
import type { RecipeDetail } from './types';

export type { RecipeDetail, RecipeStep } from './types';

/** Recettes détaillées, indexées par l'identifiant du plat. */
export const RECIPES: Record<string, RecipeDetail> = {
  ...RECIPES_TUNISIEN,
  ...RECIPES_ITALIEN,
  ...RECIPES_FUSION_SPORT,
  ...RECIPES_EXTRA,
  ...RECIPES_BREAKFAST,
};
