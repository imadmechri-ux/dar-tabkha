import type { Household, Profile } from '../types';

const KEY = 'dar-tabkha:v1';

export interface AppState {
  household: Household;
  /** Ingrédients disponibles, partagés par le foyer. */
  pantry: string[];
}

export function newProfile(name: string, partial: Partial<Profile> = {}): Profile {
  return {
    id: crypto.randomUUID(),
    name,
    diet: [],
    allergies: [],
    dislikes: [],
    spiceMax: 2,
    goal: 'maintien',
    sportRoles: [],
    isChild: false,
    ...partial,
  };
}

export function defaultState(): AppState {
  return {
    household: { id: crypto.randomUUID(), name: 'Mon foyer', profiles: [newProfile('Moi')] },
    pantry: [],
  };
}

/** Lecture tolérante : toute erreur (stockage bloqué, JSON corrompu) renvoie l'état par défaut. */
export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as AppState;
    if (!parsed.household?.profiles?.length) return defaultState();
    return parsed;
  } catch {
    return defaultState();
  }
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Stockage indisponible (navigation privée, quota) : l'application continue sans sauvegarde.
  }
}
