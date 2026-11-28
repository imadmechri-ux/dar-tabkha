import { useState } from 'react';
import { INGREDIENT_BY_ID } from '../data/ingredients';
import { shoppingList, type Suggestion } from '../engine/suggest';
import type { Guests } from '../engine/scale';
import { RECIPES } from '../data/recipes';
import { PHOTOS } from '../data/photos';

const UNIT_LABELS: Record<string, string> = { g: 'g', ml: 'ml', piece: '', cs: 'c. à soupe', cc: 'c. à café', pincee: 'pincée' };
const CUISINE_LABELS: Record<string, string> = { tunisien: 'Tunisien', italien: 'Italien', fusion: 'Fusion tuniso-italienne', international: 'Autre cuisine' };

interface Props {
  suggestion: Suggestion;
  guests: Guests;
  pantry: Set<string>;
}

export function DishCard({ suggestion: s, guests, pantry }: Props) {
  const [open, setOpen] = useState(false);
  const d = s.dish;
  const list = shoppingList(d, guests, pantry);
  const estimate = list.reduce((sum, l) => sum + (l.estimatedTnd ?? 0), 0);
  const n = d.nutrition;
  const recipe = RECIPES[d.id];
  const photo = PHOTOS[d.id];

  return (
    <article className="dish card">
      {photo ? (
        <figure className="dish-photo">
          <img src={photo.src} alt={`Photo : ${d.name}`} loading="lazy" />
          <figcaption className="small muted">
            Photo : {photo.credit} · <a href={photo.url} target="_blank" rel="noreferrer">source</a> ({photo.license})
          </figcaption>
        </figure>
      ) : null}
      <header onClick={() => setOpen(!open)} role="button" tabIndex={0}>
        <div>
          <h3>{d.name}</h3>
          <div className="muted small">
            {CUISINE_LABELS[d.cuisine]} · {d.timeMinutes} min · {'🌶'.repeat(d.spice) || 'Doux'}
            {!d.verified && ' · variante à valider'}
          </div>
        </div>
        <div className="score" title="Score de pertinence">
          {Math.round(s.pantryCoverage * 100)}%
          <span className="small">du frigo</span>
        </div>
      </header>

      <div className="badges">
        {s.suitableFor.map((name) => (
          <span key={name} className="badge ok">✓ {name}</span>
        ))}
        {s.missing.length === 0 ? (
          <span className="badge ok">Tout est là</span>
        ) : (
          <span className="badge">Manque : {s.missing.map((m) => INGREDIENT_BY_ID[m].name).join(', ')}</span>
        )}
        {s.warnings.map((w) => (
          <span key={w} className="badge warn">{w}</span>
        ))}
      </div>

      {open && (
        <div className="details">
          <h4>Ingrédients pour {guests.adults + guests.children > 0 ? `${guests.adults} adulte(s)${guests.children ? ` et ${guests.children} enfant(s)` : ''}` : ''}</h4>
          <ul>
            {s.quantities.map((q) => (
              <li key={q.ingredient} className={pantry.has(q.ingredient) ? 'have' : ''}>
                {q.qty} {UNIT_LABELS[q.unit]} {INGREDIENT_BY_ID[q.ingredient].name}
                {q.optional && <span className="muted"> (facultatif)</span>}
                {pantry.has(q.ingredient) && <span className="muted"> · dans le frigo</span>}
              </li>
            ))}
          </ul>

          {recipe && (
            <>
              <p className="intro">{recipe.intro}</p>
              <p className="small muted">
                Préparation {recipe.prepMinutes} min · Cuisson {recipe.cookMinutes} min
              </p>
              <h4>Matériel</h4>
              <ul>{recipe.equipment.map((e) => <li key={e}>{e}</li>)}</ul>
            </>
          )}

          <h4>Préparation</h4>
          {recipe ? (
            <ol className="steps">
              {recipe.steps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  {step.minutes ? <span className="muted small"> · ~{step.minutes} min</span> : null}
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          ) : (
            <ol>
              {d.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          )}

          {recipe && (
            <>
              <h4>Conseils</h4>
              <ul>{recipe.tips.map((t) => <li key={t}>{t}</li>)}</ul>
              <h4>Service</h4>
              <p className="small">{recipe.serve}</p>
              <h4>Conservation</h4>
              <p className="small">{recipe.storage}</p>
            </>
          )}

          <h4>Par portion (estimation)</h4>
          <p className="small">{n.kcal} kcal · {n.protein} g protéines · {n.carbs} g glucides · {n.fat} g lipides</p>

          {list.length > 0 && (
            <>
              <h4>Liste de courses</h4>
              <ul>
                {list.map((l) => (
                  <li key={l.ingredient}>
                    {l.qty} {UNIT_LABELS[l.unit]} {l.name}
                    {l.optional && <span className="muted"> (facultatif)</span>}
                    {l.estimatedTnd !== null && <span className="muted"> · ~{l.estimatedTnd} TND</span>}
                  </li>
                ))}
              </ul>
              {estimate > 0 && <p className="small muted">Estimation partielle : ~{estimate.toFixed(1)} TND (indicatif).</p>}
            </>
          )}
        </div>
      )}
      <button className="ghost" onClick={() => setOpen(!open)}>{open ? 'Réduire' : 'Voir la recette'}</button>
    </article>
  );
}
