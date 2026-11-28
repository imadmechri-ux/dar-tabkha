import { useEffect, useMemo, useState } from 'react';
import { DishCard } from './components/DishCard';
import { PantryPanel } from './components/PantryPanel';
import { ProfileManager } from './components/ProfileManager';
import { BackupPanel } from './components/BackupPanel';
import { suggestDishes } from './engine/suggest';
import type { Guests } from './engine/scale';
import { loadState, saveState, type AppState } from './profiles/store';
import type { MealType } from './types';
import { SEASON_LABELS, seasonOf } from './engine/season';

export default function App() {
  const [state, setState] = useState<AppState>(() => loadState());
  const [meal, setMeal] = useState<MealType>('diner');
  const [guests, setGuests] = useState<Guests>({ adults: 2, children: 0 });
  const [maxTime, setMaxTime] = useState<number | ''>('');
  const [eatingIds, setEatingIds] = useState<string[] | null>(null);
  const [tab, setTab] = useState<'repas' | 'frigo' | 'foyer'>('repas');
  const [showSeasonal, setShowSeasonal] = useState(false);
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 6;

  useEffect(() => saveState(state), [state]);

  const pantry = useMemo(() => new Set(state.pantry), [state.pantry]);
  const eating = useMemo(
    () => state.household.profiles.filter((p) => (eatingIds ?? state.household.profiles.map((x) => x.id)).includes(p.id)),
    [state.household.profiles, eatingIds],
  );

  // Tous les plats classés pour ce repas ; on affiche une page à la fois.
  const ranked = useMemo(
    () =>
      suggestDishes({
        meal,
        guests,
        pantry,
        profiles: eating.length ? eating : state.household.profiles,
        maxTimeMinutes: maxTime === '' ? undefined : maxTime,
        limit: 200,
      }),
    [meal, guests, pantry, eating, maxTime, state.household.profiles],
  );
  const pageCount = Math.max(1, Math.ceil(ranked.suggestions.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount - 1);
  const result = useMemo(
    () => ({
      ...ranked,
      suggestions: ranked.suggestions.slice(currentPage * PAGE_SIZE, currentPage * PAGE_SIZE + PAGE_SIZE),
    }),
    [ranked, currentPage],
  );

  // Revenir à la première page dès que le contexte change.
  useEffect(() => setPage(0), [meal, guests, pantry, eating, maxTime]);

  const setPantry = (next: Set<string>) => setState({ ...state, pantry: [...next] });

  const currentSeason = seasonOf();
  // Recette de saison : le meilleur plat de saison pour ce repas, parmi tous les plats (pas seulement les 6 premiers).
  const seasonalPick = useMemo(
    () =>
      suggestDishes({
        meal,
        guests,
        pantry,
        profiles: eating.length ? eating : state.household.profiles,
        maxTimeMinutes: maxTime === '' ? undefined : maxTime,
        limit: 80,
        season: currentSeason,
      }).suggestions.find((x) => x.seasonal),
    [meal, guests, pantry, eating, maxTime, state.household.profiles, currentSeason],
  );

  return (
    <main className="app">
      <header className="top">
        <div className="brand">
          <img src="logo.svg" alt="" width="44" height="44" />
          <h1>Dar Tabkha</h1>
        </div>
        <p className="muted">Repas tuniso-italiens selon ton frigo et ton foyer</p>
      </header>

      <nav className="tabs" aria-label="Sections">
        <button className={tab === 'repas' ? 'tab on' : 'tab'} onClick={() => setTab('repas')}>Repas</button>
        <button className={tab === 'frigo' ? 'tab on' : 'tab'} onClick={() => setTab('frigo')}>Frigo</button>
        <button className={tab === 'foyer' ? 'tab on' : 'tab'} onClick={() => setTab('foyer')}>Foyer</button>
      </nav>

      {tab === 'foyer' && (
        <>
          <ProfileManager
            profiles={state.household.profiles}
            onChange={(profiles) => setState({ ...state, household: { ...state.household, profiles } })}
          />
          <BackupPanel state={state} onRestore={(next) => setState(next)} />
        </>
      )}

      {tab === 'frigo' && <PantryPanel pantry={pantry} onChange={setPantry} />}

      {tab === 'repas' && (
        <>
          <section className="card">
            <div className="seg">
              <button className={meal === 'petit-dejeuner' ? 'on' : ''} onClick={() => setMeal('petit-dejeuner')}>Petit-déj</button>
              <button className={meal === 'dejeuner' ? 'on' : ''} onClick={() => setMeal('dejeuner')}>Déjeuner</button>
              <button className={meal === 'diner' ? 'on' : ''} onClick={() => setMeal('diner')}>Dîner</button>
              <button className={meal === 'gouter' ? 'on' : ''} onClick={() => setMeal('gouter')}>Goûter</button>
            </div>

            <div className="grid2">
              <Stepper label="Adultes" value={guests.adults} min={1} max={20} onChange={(v) => setGuests({ ...guests, adults: v })} />
              <Stepper label="Enfants" value={guests.children} min={0} max={20} onChange={(v) => setGuests({ ...guests, children: v })} />
            </div>
            <p className="muted small">Les enfants comptent pour une demi-portion.</p>

            <label className="field">
              Temps maximum (optionnel)
              <select value={maxTime} onChange={(e) => setMaxTime(e.target.value ? Number(e.target.value) : '')}>
                <option value="">Pas de limite</option>
                <option value={15}>15 min</option>
                <option value={30}>30 min</option>
                <option value={45}>45 min</option>
                <option value={60}>1 h</option>
              </select>
            </label>

            <fieldset>
              <legend>Qui mange ?</legend>
              <div className="chips">
                {state.household.profiles.map((p) => {
                  const active = (eatingIds ?? state.household.profiles.map((x) => x.id)).includes(p.id);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      className={active ? 'chip on' : 'chip'}
                      onClick={() => {
                        const current = eatingIds ?? state.household.profiles.map((x) => x.id);
                        setEatingIds(current.includes(p.id) ? current.filter((x) => x !== p.id) : [...current, p.id]);
                      }}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </section>

          <label className="check card-check">
            <input type="checkbox" checked={showSeasonal} onChange={(e) => setShowSeasonal(e.target.checked)} />
            Afficher une recette de saison
          </label>

          {showSeasonal && seasonalPick && (
            <>
              <h2 className="section-title">Recette de saison · {SEASON_LABELS[currentSeason]}</h2>
              <DishCard suggestion={seasonalPick} guests={guests} pantry={pantry} />
            </>
          )}

          <h2 className="section-title">Idées pour toi</h2>
          {result.suggestions.length === 0 && (
            <p className="card">Aucune idée avec ces réglages. Ajoute des ingrédients dans « Frigo », ou assouplis les contraintes du foyer.</p>
          )}
          {result.suggestions.map((s) => (
            <DishCard key={s.dish.id} suggestion={s} guests={guests} pantry={pantry} />
          ))}

          {pageCount > 1 && (
            <div className="pager">
              <button className="ghost" onClick={() => setPage((currentPage - 1 + pageCount) % pageCount)}>
                ← Précédentes
              </button>
              <span className="muted small">
                Page {currentPage + 1} / {pageCount}
              </span>
              <button onClick={() => setPage((currentPage + 1) % pageCount)}>Autres propositions →</button>
            </div>
          )}

          {result.excluded.length > 0 && (
            <details className="card">
              <summary>Plats écartés pour raison de régime, allergie ou temps ({result.excluded.length})</summary>
              <ul className="small">
                {result.excluded.map((e) => (
                  <li key={e.dish.id}><strong>{e.dish.name}</strong> : {e.reason}</li>
                ))}
              </ul>
            </details>
          )}
        </>
      )}

      <footer className="muted small">
        Les valeurs nutritionnelles sont des estimations. Ce n’est pas un avis médical.
      </footer>
    </main>
  );
}

function Stepper({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void }) {
  return (
    <div className="stepper">
      <span>{label}</span>
      <div>
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} aria-label={`Retirer ${label}`}>−</button>
        <strong>{value}</strong>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} aria-label={`Ajouter ${label}`}>+</button>
      </div>
    </div>
  );
}
