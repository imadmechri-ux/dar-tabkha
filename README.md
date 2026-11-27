# Dar Tabkha

Application (PWA) d'idées de repas tuniso-italiens selon ce que tu as dans ton frigo, le nombre de personnes et les contraintes de chaque membre du foyer.

## Lancer en local

```bash
npm install
npm run dev      # développement
npm test         # tests du moteur de suggestion
npm run build    # build de production (dist/)
```

## Fonctionnalités du MVP

- **Repas** : déjeuner ou dîner, adultes et enfants (enfant = demi-portion), temps maximum, choix des convives.
- **Suggestions** : classées par couverture du frigo, adéquation sportive et cible de protéines.
- **Exclusions strictes** : allergies, régimes (végétarien, végan, sans gluten, sans lactose, sans porc, halal) et piquant maximum. Un plat incompatible avec un membre n'est jamais proposé ; il apparaît dans la liste des plats écartés, avec la raison.
- **Frigo** : saisie libre (français, italien, arabe tunisien translittéré), liste complète par catégorie, et photo du frigo.
- **Photo** : reconnaissance dans le navigateur (CLIP via Transformers.js). La photo ne quitte pas l'appareil. Le modèle est téléchargé une fois. Les ingrédients détectés sont des candidats à confirmer.
- **Foyer et profils** : plusieurs membres, chacun avec ses régimes, allergies, aliments évités, piquant, objectif et moments sportifs (avant effort, après effort, récupération, repas léger).
- **Liste de courses** : ingrédients manquants, quantités pour le nombre de portions, estimation indicative en TND.

## Données

- `src/data/ingredients.ts` : catalogue d'ingrédients, synonymes et drapeaux (porc, gluten, lactose, allergènes).
- `src/data/dishes.ts` : base de plats. Les valeurs nutritionnelles sont des **estimations** et les recettes sont des **versions simplifiées** : `verified: false` tant qu'elles ne sont pas validées.
- `src/__tests__/engine.test.ts` vérifie notamment qu'un plat ne revendique pas un régime que ses ingrédients contredisent.

## Stockage

Profils, foyer et frigo sont enregistrés dans le `localStorage` de l'appareil. Aucun compte ni serveur pour le MVP. La synchronisation entre appareils (Supabase) est prévue en phase 2.

## Limites connues (MVP)

- Reconnaissance photo : précision variable selon l'éclairage et l'encombrement. La confirmation manuelle est obligatoire.
- Le caractère halal est déduit de l'absence de porc et d'alcool. Il faut vérifier l'origine de la viande et les produits transformés.
- Les cibles nutritionnelles ne sont pas un avis médical.

## Feuille de route

- Phase 2 : synchronisation des profils, mode Ramadan (iftar et sahour), plan de cuisson pour invités, mode « utilise-d'abord » (dates de péremption), intégration optionnelle de données d'entraînement.
- Phase 3 : Gemini en plan B pour la photo, icônes PWA, encapsulation Android.
