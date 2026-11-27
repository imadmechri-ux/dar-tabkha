import { useState } from 'react';
import { INGREDIENTS } from '../data/ingredients';
import { ALL_DIET_TAGS, ALL_SPORT_ROLES } from '../data/dishes';
import { newProfile } from '../profiles/store';
import type { DietTag, Goal, Profile, SportRole } from '../types';

const GOALS: { value: Goal; label: string }[] = [
  { value: 'maintien', label: 'Maintien' },
  { value: 'perte-de-poids', label: 'Perte de poids' },
  { value: 'prise-de-masse', label: 'Prise de masse' },
  { value: 'endurance', label: 'Endurance' },
  { value: 'seche', label: 'Sèche' },
];

const DIET_LABELS: Record<DietTag, string> = {
  vegetarien: 'Végétarien',
  vegan: 'Végan',
  'sans-gluten': 'Sans gluten',
  'sans-lactose': 'Sans lactose',
  'sans-porc': 'Sans porc',
  halal: 'Halal',
};

const SPORT_LABELS: Record<SportRole, string> = {
  'pre-effort': 'Avant effort',
  'post-effort': 'Après effort',
  recuperation: 'Récupération',
  leger: 'Repas léger',
};

const ALLERGY_OPTIONS = [
  { id: 'arachide', label: 'Arachides' },
  { id: 'poisson', label: 'Poisson' },
  { id: 'crustaces', label: 'Crustacés' },
  { id: 'oeuf', label: 'Œufs' },
  { id: 'lait', label: 'Lait' },
  { id: 'fruits-a-coque', label: 'Fruits à coque' },
];

interface Props {
  profiles: Profile[];
  onChange: (profiles: Profile[]) => void;
}

export function ProfileManager({ profiles, onChange }: Props) {
  const [editing, setEditing] = useState<Profile | null>(null);

  const save = (p: Profile) => {
    const exists = profiles.some((x) => x.id === p.id);
    onChange(exists ? profiles.map((x) => (x.id === p.id ? p : x)) : [...profiles, p]);
    setEditing(null);
  };

  const remove = (id: string) => {
    if (profiles.length <= 1) return;
    onChange(profiles.filter((p) => p.id !== id));
  };

  if (editing) {
    return <ProfileForm profile={editing} onSave={save} onCancel={() => setEditing(null)} />;
  }

  return (
    <section className="card">
      <h2>Membres du foyer</h2>
      <ul className="list">
        {profiles.map((p) => (
          <li key={p.id} className="row">
            <div>
              <strong>{p.name}</strong>
              <div className="muted small">
                {p.isChild ? 'Enfant · ' : ''}
                {p.diet.map((d) => DIET_LABELS[d]).join(', ') || 'Aucun régime'}
                {p.sportRoles.length ? ' · Sportif' : ''}
              </div>
            </div>
            <div className="row-actions">
              <button className="ghost" onClick={() => setEditing(p)}>Modifier</button>
              {profiles.length > 1 && <button className="ghost danger" onClick={() => remove(p.id)}>Retirer</button>}
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => setEditing(newProfile('Nouveau membre'))}>+ Ajouter un membre</button>
    </section>
  );
}

function ProfileForm({ profile, onSave, onCancel }: { profile: Profile; onSave: (p: Profile) => void; onCancel: () => void }) {
  const [p, setP] = useState<Profile>(profile);
  const toggle = <T,>(list: T[], item: T): T[] => (list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);

  return (
    <section className="card">
      <h2>{profile.name === 'Nouveau membre' ? 'Nouveau membre' : `Profil : ${profile.name}`}</h2>

      <label className="field">
        Prénom
        <input value={p.name} onChange={(e) => setP({ ...p, name: e.target.value })} maxLength={30} />
      </label>

      <label className="check">
        <input type="checkbox" checked={p.isChild} onChange={(e) => setP({ ...p, isChild: e.target.checked })} />
        Enfant (compté en demi-portion)
      </label>

      <fieldset>
        <legend>Régime</legend>
        <div className="chips">
          {ALL_DIET_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={p.diet.includes(tag) ? 'chip on' : 'chip'}
              onClick={() => setP({ ...p, diet: toggle(p.diet, tag) })}
            >
              {DIET_LABELS[tag]}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Allergies (exclusion stricte)</legend>
        <div className="chips">
          {ALLERGY_OPTIONS.map((a) => (
            <button
              key={a.id}
              type="button"
              className={p.allergies.includes(a.id) ? 'chip on danger-on' : 'chip'}
              onClick={() => setP({ ...p, allergies: toggle(p.allergies, a.id) })}
            >
              {a.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Aliments peu appréciés (évités, sans exclusion)</legend>
        <div className="chips">
          {INGREDIENTS.slice(0, 40).map((i) => (
            <button
              key={i.id}
              type="button"
              className={p.dislikes.includes(i.id) ? 'chip on' : 'chip'}
              onClick={() => setP({ ...p, dislikes: toggle(p.dislikes, i.id) })}
            >
              {i.name}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="field">
        Piquant maximum
        <select value={p.spiceMax} onChange={(e) => setP({ ...p, spiceMax: Number(e.target.value) as Profile['spiceMax'] })}>
          <option value={0}>Aucun</option>
          <option value={1}>Doux</option>
          <option value={2}>Moyen</option>
          <option value={3}>Fort</option>
        </select>
      </label>

      <label className="field">
        Objectif
        <select value={p.goal} onChange={(e) => setP({ ...p, goal: e.target.value as Goal })}>
          {GOALS.map((g) => (
            <option key={g.value} value={g.value}>{g.label}</option>
          ))}
        </select>
      </label>

      <fieldset>
        <legend>Pratique sportive : moments de repas ciblés</legend>
        <div className="chips">
          {ALL_SPORT_ROLES.map((r) => (
            <button
              key={r}
              type="button"
              className={p.sportRoles.includes(r) ? 'chip on' : 'chip'}
              onClick={() => setP({ ...p, sportRoles: toggle(p.sportRoles, r) })}
            >
              {SPORT_LABELS[r]}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid2">
        <label className="field">
          Poids (kg)
          <input
            type="number"
            inputMode="decimal"
            min={30}
            max={250}
            value={p.weightKg ?? ''}
            onChange={(e) => setP({ ...p, weightKg: e.target.value ? Number(e.target.value) : undefined })}
          />
        </label>
        <label className="field">
          Taille (cm)
          <input
            type="number"
            inputMode="numeric"
            min={100}
            max={230}
            value={p.heightCm ?? ''}
            onChange={(e) => setP({ ...p, heightCm: e.target.value ? Number(e.target.value) : undefined })}
          />
        </label>
      </div>
      <p className="muted small">Le poids sert uniquement à estimer une cible de protéines par repas. Il reste sur cet appareil.</p>

      <div className="row-actions">
        <button className="ghost" onClick={onCancel}>Annuler</button>
        <button onClick={() => onSave({ ...p, name: p.name.trim() || 'Membre' })}>Enregistrer</button>
      </div>
    </section>
  );
}
