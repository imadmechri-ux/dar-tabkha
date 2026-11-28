import type { AppState } from './store';
import type { Goal, Household, Profile } from '../types';

const GOALS: Goal[] = ['maintien', 'perte-de-poids', 'prise-de-masse', 'endurance', 'seche'];

export const BACKUP_FORMAT = 'dar-tabkha-backup';
export const BACKUP_VERSION = 1;

/** Fichier de sauvegarde : foyer, profils et frigo. Aucune photo. */
export function buildBackup(state: AppState): string {
  return JSON.stringify(
    {
      format: BACKUP_FORMAT,
      version: BACKUP_VERSION,
      exportedAt: new Date().toISOString(),
      household: state.household,
      pantry: state.pantry,
    },
    null,
    2,
  );
}

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === 'string');
}

function isProfile(v: unknown): v is Profile {
  if (!v || typeof v !== 'object') return false;
  const p = v as Record<string, unknown>;
  return (
    typeof p.id === 'string' &&
    typeof p.name === 'string' &&
    p.name.length > 0 &&
    p.name.length <= 40 &&
    isStringArray(p.diet) &&
    isStringArray(p.allergies) &&
    isStringArray(p.dislikes) &&
    typeof p.spiceMax === 'number' &&
    p.spiceMax >= 0 &&
    p.spiceMax <= 3 &&
    typeof p.goal === 'string' &&
    GOALS.includes(p.goal as Goal) &&
    isStringArray(p.sportRoles) &&
    typeof p.isChild === 'boolean' &&
    (p.weightKg === undefined || typeof p.weightKg === 'number') &&
    (p.heightCm === undefined || typeof p.heightCm === 'number')
  );
}

export type ParseResult = { ok: true; state: AppState } | { ok: false; error: string };

/** Vérifie un fichier de sauvegarde avant de l'appliquer. Ne modifie rien. */
export function parseBackup(text: string): ParseResult {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    return { ok: false, error: 'Le fichier n’est pas un JSON valide.' };
  }
  if (!data || typeof data !== 'object') return { ok: false, error: 'Contenu inattendu.' };
  const d = data as Record<string, unknown>;
  if (d.format !== BACKUP_FORMAT) return { ok: false, error: 'Ce fichier n’est pas une sauvegarde Dar Tabkha.' };
  if (d.version !== BACKUP_VERSION) return { ok: false, error: 'Version de sauvegarde non prise en charge.' };

  const h = d.household as Record<string, unknown> | undefined;
  if (!h || typeof h.id !== 'string' || typeof h.name !== 'string' || !Array.isArray(h.profiles)) {
    return { ok: false, error: 'Le foyer est incomplet.' };
  }
  if (h.profiles.length === 0 || h.profiles.length > 20) {
    return { ok: false, error: 'Le nombre de membres doit être entre 1 et 20.' };
  }
  if (!h.profiles.every(isProfile)) return { ok: false, error: 'Un profil est incomplet ou invalide.' };
  if (!isStringArray(d.pantry)) return { ok: false, error: 'La liste du frigo est invalide.' };

  const household: Household = { id: h.id, name: h.name.slice(0, 40), profiles: h.profiles as Profile[] };
  return { ok: true, state: { household, pantry: d.pantry } };
}
