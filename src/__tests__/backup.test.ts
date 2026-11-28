import { describe, expect, it } from 'vitest';
import { buildBackup, parseBackup } from '../profiles/backup';
import { defaultState, newProfile } from '../profiles/store';

describe('sauvegarde', () => {
  it('aller-retour : exporter puis importer restaure le même état', () => {
    const state = defaultState();
    state.household.profiles.push(newProfile('Sara', { diet: ['halal'], allergies: ['arachide'] }));
    state.pantry = ['tomate', 'pates'];
    const result = parseBackup(buildBackup(state));
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.state.household.profiles.map((p) => p.name)).toEqual(['Moi', 'Sara']);
      expect(result.state.pantry).toEqual(['tomate', 'pates']);
      expect(result.state.household.profiles[1].allergies).toEqual(['arachide']);
    }
  });

  it('refuse un fichier qui n’est pas une sauvegarde', () => {
    expect(parseBackup('{"a":1}').ok).toBe(false);
    expect(parseBackup('pas du json').ok).toBe(false);
  });

  it('refuse un profil avec un objectif inconnu ou un piquant hors limites', () => {
    const state = defaultState();
    const bad = JSON.parse(buildBackup(state));
    bad.household.profiles[0].goal = 'magie';
    expect(parseBackup(JSON.stringify(bad)).ok).toBe(false);
    const bad2 = JSON.parse(buildBackup(state));
    bad2.household.profiles[0].spiceMax = 9;
    expect(parseBackup(JSON.stringify(bad2)).ok).toBe(false);
  });

  it('refuse un foyer vide', () => {
    const bad = JSON.parse(buildBackup(defaultState()));
    bad.household.profiles = [];
    expect(parseBackup(JSON.stringify(bad)).ok).toBe(false);
  });
});
