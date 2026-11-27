import { INGREDIENTS } from '../data/ingredients';

export interface Detection {
  id: string;
  name: string;
  score: number;
}

const MODEL = 'Xenova/clip-vit-base-patch32';
const TRANSFORMERS_URL = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/dist/transformers.web.min.js';
let classifierPromise: Promise<unknown> | null = null;

/**
 * Reconnaissance d'ingrédients dans le navigateur (CLIP, zero-shot).
 * Le modèle n'est téléchargé qu'au premier usage puis mis en cache par le navigateur.
 * Aucune photo ne quitte l'appareil.
 */
function getClassifier() {
  if (!classifierPromise) {
    // Librairie chargée depuis un CDN à version figée : elle ne fait pas partie du bundle du dépôt.
    classifierPromise = import(/* @vite-ignore */ TRANSFORMERS_URL).then(({ pipeline }) =>
      pipeline('zero-shot-image-classification', MODEL),
    );
  }
  return classifierPromise;
}

interface ClassifierOutput {
  label: string;
  score: number;
}

/** Renvoie les ingrédients les plus probables. Ce sont des candidats : l'utilisateur confirme. */
export async function detectIngredients(imageUrl: string, maxResults = 8, minScore = 0.04): Promise<Detection[]> {
  const classifier = (await getClassifier()) as (
    image: string,
    labels: string[],
  ) => Promise<ClassifierOutput[]>;

  const labels = INGREDIENTS.map((i) => `a photo of ${i.name.toLowerCase()}`);
  const output = await classifier(imageUrl, labels);

  return output
    .filter((o) => o.score >= minScore)
    .slice(0, maxResults)
    .map((o) => {
      const idx = labels.indexOf(o.label);
      const ing = INGREDIENTS[idx];
      return { id: ing.id, name: ing.name, score: o.score };
    });
}
