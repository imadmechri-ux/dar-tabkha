export type Cuisine = 'tunisien' | 'italien' | 'fusion' | 'international';
export type MealType = 'petit-dejeuner' | 'dejeuner' | 'diner' | 'gouter';
export type DietTag =
  | 'vegetarien'
  | 'vegan'
  | 'sans-gluten'
  | 'sans-lactose'
  | 'sans-porc'
  | 'halal';
export type SportRole = 'pre-effort' | 'post-effort' | 'recuperation' | 'leger';
export type Goal = 'maintien' | 'perte-de-poids' | 'prise-de-masse' | 'endurance' | 'seche';

export type Season = 'printemps' | 'ete' | 'automne' | 'hiver';

export interface IngredientDef {
  id: string;
  /** Nom affiché (français). */
  name: string;
  /** Synonymes : italien, arabe tunisien translittéré, variantes. Servent à la normalisation. */
  synonyms: string[];
  category: 'legume' | 'fruit' | 'viande' | 'poisson' | 'feculent' | 'laitier' | 'epice' | 'condiment' | 'autre';
  /** Ingrédient à base de porc ou d'alcool (pour les filtres). */
  containsPork?: boolean;
  containsAnimal?: boolean; // viande, poisson, œuf ou dérivé animal
  containsGluten?: boolean;
  containsLactose?: boolean;
  /** Nature de l'allergène pour les alertes (ex. 'fruits-de-mer', 'arachides'). */
  allergens?: string[];
  /** Coût indicatif par kg ou par unité, en dinars tunisiens (TND), pour la liste de courses. */
  priceHint?: number;
  /** Saisons où l'ingrédient est au mieux (Tunisie et Europe du Sud). */
  seasons?: Season[];
}

export interface DishIngredient {
  ingredient: string; // id dans le catalogue
  /** Quantité par personne. */
  qty: number;
  unit: 'g' | 'ml' | 'piece' | 'cs' | 'cc' | 'pincee';
  /** Facultatif : l'ingrédient peut être remplacé sans gêner la recette. */
  optional?: boolean;
}

export interface Nutrition {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Dish {
  id: string;
  name: string;
  cuisine: Cuisine;
  mealTypes: MealType[];
  timeMinutes: number;
  spice: 0 | 1 | 2 | 3;
  /** Plat à tester avant de le présenter comme authentique. */
  verified: boolean;
  steps: string[];
  ingredients: DishIngredient[];
  /** Valeurs par portion. Estimations tant que la base n'est pas validée. */
  nutrition: Nutrition;
  /** Tags de régime compatibles. */
  diet: DietTag[];
  /** Rôle sportif : utile pour les profils sportifs. */
  sportRoles: SportRole[];
  /** Plats qui se réchauffent bien, pour le batch cooking. */
  reheatable: boolean;
}

export interface Profile {
  id: string;
  name: string;
  /** Régimes et contraintes exigés par cette personne. */
  diet: DietTag[];
  allergies: string[]; // ids d'ingrédients à exclure (ex. 'arachide')
  dislikes: string[]; // ids d'ingrédients à éviter sans interdire
  spiceMax: 0 | 1 | 2 | 3;
  goal: Goal;
  sportRoles: SportRole[];
  /** Poids en kg, taille en cm, âge : pour estimer les cibles. */
  weightKg?: number;
  heightCm?: number;
  age?: number;
  isChild: boolean;
}

export interface Household {
  id: string;
  name: string;
  profiles: Profile[];
}
