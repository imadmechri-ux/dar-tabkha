import { useState } from 'react';
import { INGREDIENTS, INGREDIENT_BY_ID } from '../data/ingredients';
import { resolveIngredient } from '../engine/normalize';
import { detectIngredients, type Detection } from '../photo/detect';

interface Props {
  pantry: Set<string>;
  onChange: (pantry: Set<string>) => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  legume: 'Légumes',
  fruit: 'Fruits',
  viande: 'Viandes',
  poisson: 'Poissons',
  feculent: 'Féculents',
  laitier: 'Produits laitiers',
  epice: 'Épices et herbes',
  condiment: 'Condiments',
  autre: 'Autres',
};

export function PantryPanel({ pantry, onChange }: Props) {
  const [text, setText] = useState('');
  const [unknown, setUnknown] = useState<string | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [candidates, setCandidates] = useState<Detection[] | null>(null);
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggle = (id: string) => {
    const next = new Set(pantry);
    next.has(id) ? next.delete(id) : next.add(id);
    onChange(next);
  };

  const addFromText = () => {
    const id = resolveIngredient(text);
    if (!id) {
      setUnknown(text.trim());
      return;
    }
    onChange(new Set([...pantry, id]));
    setText('');
    setUnknown(null);
  };

  const onPhoto = async (file: File | undefined) => {
    if (!file) return;
    setError(null);
    setBusy(true);
    setCandidates(null);
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
    try {
      const found = await detectIngredients(url);
      setCandidates(found);
      setPicked(new Set(found.filter((f) => f.score >= 0.08).map((f) => f.id)));
      if (found.length === 0) setError('Rien de reconnu. Essaie une photo plus proche, mieux éclairée, ou ajoute les ingrédients à la main.');
    } catch (e) {
      console.error('Reconnaissance photo :', e);
      const detail = e instanceof Error ? e.message : String(e);
      setError(`La reconnaissance n’a pas pu démarrer (${detail.slice(0, 160)}). Tu peux saisir les ingrédients à la main.`);
    } finally {
      setBusy(false);
    }
  };

  const confirmCandidates = () => {
    onChange(new Set([...pantry, ...picked]));
    setCandidates(null);
    setPhotoUrl(null);
  };

  const grouped = Object.entries(
    INGREDIENTS.reduce<Record<string, typeof INGREDIENTS>>((acc, i) => {
      (acc[i.category] ??= []).push(i);
      return acc;
    }, {}),
  );

  return (
    <section className="card">
      <h2>Ce que j’ai dans ma cuisine</h2>

      <div className="photo-box">
        <label className="file-button">
          📷 Photo du frigo
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={(e) => onPhoto(e.target.files?.[0])}
            hidden
          />
        </label>
        <p className="muted small">La reconnaissance se fait sur ton téléphone. La photo n’est pas envoyée.</p>
      </div>

      {busy && <p className="muted">Analyse de la photo… (le premier usage télécharge le modèle, une seule fois)</p>}
      {error && <p className="warn">{error}</p>}

      {photoUrl && candidates && candidates.length > 0 && (
        <div className="candidates">
          <img src={photoUrl} alt="Photo du frigo" className="thumb" />
          <p className="small">Vérifie la liste : coche ce qui est bien présent.</p>
          <div className="chips">
            {candidates.map((c) => (
              <button
                key={c.id}
                type="button"
                className={picked.has(c.id) ? 'chip on' : 'chip'}
                onClick={() => {
                  const next = new Set(picked);
                  next.has(c.id) ? next.delete(c.id) : next.add(c.id);
                  setPicked(next);
                }}
              >
                {c.name} <span className="muted">{Math.round(c.score * 100)}%</span>
              </button>
            ))}
          </div>
          <button onClick={confirmCandidates} disabled={picked.size === 0}>Ajouter {picked.size} ingrédient(s)</button>
        </div>
      )}

      <div className="text-add">
        <input
          placeholder="Ajouter : tonno, pomodoro, harissa…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addFromText()}
        />
        <button onClick={addFromText} disabled={!text.trim()}>Ajouter</button>
      </div>
      {unknown && (
        <p className="warn small">« {unknown} » n’est pas encore dans le catalogue. Choisis un ingrédient proche ci-dessous.</p>
      )}

      <details>
        <summary>Tous les ingrédients ({pantry.size} sélectionnés)</summary>
        {grouped.map(([cat, items]) => (
          <div key={cat} className="group">
            <h3>{CATEGORY_LABELS[cat]}</h3>
            <div className="chips">
              {items.map((i) => (
                <button
                  key={i.id}
                  type="button"
                  className={pantry.has(i.id) ? 'chip on' : 'chip'}
                  onClick={() => toggle(i.id)}
                >
                  {INGREDIENT_BY_ID[i.id].name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </details>

      {pantry.size > 0 && (
        <p className="muted small">Dans le frigo : {[...pantry].map((id) => INGREDIENT_BY_ID[id]?.name ?? id).join(', ')}</p>
      )}
    </section>
  );
}
