export interface RecipeStep {
  title: string;
  text: string;
  /** Durée indicative de l'étape, en minutes. */
  minutes?: number;
}

export interface RecipeDetail {
  /** Présentation courte du plat et de sa place dans la cuisine. */
  intro: string;
  /** Matériel nécessaire. */
  equipment: string[];
  prepMinutes: number;
  cookMinutes: number;
  steps: RecipeStep[];
  /** Conseils de réussite et erreurs fréquentes. */
  tips: string[];
  /** Accompagnements et présentation. */
  serve: string;
  /** Conservation et réchauffage. */
  storage: string;
}
