import { INGREDIENTS } from '../data/ingredients';

/** Met en minuscules et retire les accents et la ponctuation. */
export function normalizeText(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’'`]/g, ' ')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Index : chaque nom et chaque synonyme normalisé pointe vers un id d'ingrédient.
const INDEX = new Map<string, string>();
for (const ing of INGREDIENTS) {
  for (const label of [ing.name, ...ing.synonyms]) {
    INDEX.set(normalizeText(label), ing.id);
  }
}

/** Retrouve l'id d'ingrédient correspondant à un libellé libre (ex. « Pomodoro », « banadoura »). */
export function resolveIngredient(label: string): string | undefined {
  const key = normalizeText(label);
  if (!key) return undefined;
  const direct = INDEX.get(key);
  if (direct) return direct;
  // Filet de sécurité : singulier simple (« tomates » -> « tomate »).
  if (key.endsWith('s')) return INDEX.get(key.slice(0, -1));
  return undefined;
}

/** Associe une liste de libellés (saisie libre, reconnaissance photo) à des ids d'ingrédients uniques. */
export function resolveMany(labels: string[]): string[] {
  const ids = new Set<string>();
  for (const label of labels) {
    const id = resolveIngredient(label);
    if (id) ids.add(id);
  }
  return [...ids];
}
