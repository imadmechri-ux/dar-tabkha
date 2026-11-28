import { useRef, useState } from 'react';
import { buildBackup, parseBackup } from '../profiles/backup';
import type { AppState } from '../profiles/store';

interface Props {
  state: AppState;
  onRestore: (state: AppState) => void;
}

export function BackupPanel({ state, onRestore }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const exportFile = () => {
    setError(null);
    const blob = new Blob([buildBackup(state)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `dar-tabkha-sauvegarde-${date}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage('Sauvegarde téléchargée. Garde ce fichier dans un endroit sûr.');
  };

  const importFile = async (file: File | undefined) => {
    if (!file) return;
    setError(null);
    setMessage(null);
    const text = await file.text();
    const result = parseBackup(text);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    const ok = window.confirm(
      `Remplacer les données actuelles par la sauvegarde ? Le foyer « ${result.state.household.name} » (${result.state.household.profiles.length} membre(s)) et ${result.state.pantry.length} ingrédient(s) seront utilisés. Les données actuelles seront perdues.`,
    );
    if (!ok) return;
    onRestore(result.state);
    setMessage('Sauvegarde restaurée.');
  };

  return (
    <section className="card">
      <h2>Sauvegarde</h2>
      <p className="small muted">
        Tes profils et ton frigo sont enregistrés sur cet appareil. Exporte un fichier pour les garder ailleurs, ou pour les retrouver sur un autre téléphone.
      </p>
      <div className="row-actions">
        <button onClick={exportFile}>Exporter</button>
        <button className="ghost" onClick={() => fileRef.current?.click()}>Importer</button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(e) => {
            importFile(e.target.files?.[0]);
            e.target.value = '';
          }}
        />
      </div>
      {message && <p className="small">{message}</p>}
      {error && <p className="warn small">{error}</p>}
    </section>
  );
}
