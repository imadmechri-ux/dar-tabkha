import { EXTRA_DISHES, EXTRA_DISHES_2, EXTRA_DISHES_3, EXTRA_DISHES_4, EXTRA_DISHES_5 } from './dishes-extra';
import type { Dish, DietTag, SportRole } from '../types';

// Base de plats du MVP. Quantités par personne adulte.
// Valeurs nutritionnelles : ESTIMATIONS par portion, à valider (verified: false).
// Recettes : versions familiales simplifiées, à valider avant publication.

const ALL_MEALS: Dish['mealTypes'] = ['dejeuner', 'diner'];

function dish(p: Omit<Dish, 'verified' | 'reheatable'> & { reheatable?: boolean }): Dish {
  return { verified: false, reheatable: false, ...p };
}

const BASE_DISHES: Dish[] = [
  // ───────────── Tunisien ─────────────
  dish({
    id: 'lablabi', name: 'Lablabi', cuisine: 'tunisien', mealTypes: ['dejeuner'], timeMinutes: 25, spice: 2,
    steps: ['Mixer le pain rassis, le cumin et l’ail.', 'Verser sur les pois chiches cuits et le bouillon chaud.', 'Ajouter l’huile d’olive, le harissa et le citron.'],
    ingredients: [
      { ingredient: 'pois-chiche', qty: 80, unit: 'g' }, { ingredient: 'pain', qty: 60, unit: 'g' },
      { ingredient: 'cumin', qty: 1, unit: 'cc' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'harissa', qty: 1, unit: 'cc', optional: true },
      { ingredient: 'citron', qty: 0.5, unit: 'piece' }, { ingredient: 'bouillon', qty: 250, unit: 'ml' },
    ],
    nutrition: { kcal: 420, protein: 16, carbs: 62, fat: 12 },
    diet: ['vegetarien', 'vegan', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['leger'], reheatable: false,
  }),
  dish({
    id: 'ojja-merguez', name: 'Ojja aux merguez', cuisine: 'tunisien', mealTypes: ALL_MEALS, timeMinutes: 35, spice: 3,
    steps: ['Faire revenir l’oignon, le poivron et l’ail.', 'Ajouter le concentré, la harissa et les tomates.', 'Déposer les merguez et les œufs, couvrir 10 min.'],
    ingredients: [
      { ingredient: 'merguez', qty: 100, unit: 'g' }, { ingredient: 'oeuf', qty: 1, unit: 'piece' },
      { ingredient: 'tomate', qty: 150, unit: 'g' }, { ingredient: 'poivron', qty: 0.5, unit: 'piece' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'concentre-tomate', qty: 1, unit: 'cs' },
      { ingredient: 'harissa', qty: 1, unit: 'cc' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 560, protein: 24, carbs: 14, fat: 44 },
    diet: ['sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['post-effort'], reheatable: true,
  }),
  dish({
    id: 'chakchouka', name: 'Chakchouka', cuisine: 'tunisien', mealTypes: ALL_MEALS, timeMinutes: 30, spice: 2,
    steps: ['Faire fondre l’oignon et le poivron dans l’huile.', 'Ajouter tomates, ail, harissa et laisser mijoter 15 min.', 'Creuser des puits, casser les œufs dedans et couvrir.'],
    ingredients: [
      { ingredient: 'tomate', qty: 200, unit: 'g' }, { ingredient: 'poivron', qty: 1, unit: 'piece' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'oeuf', qty: 2, unit: 'piece' },
      { ingredient: 'ail', qty: 1, unit: 'piece' }, { ingredient: 'harissa', qty: 1, unit: 'cc' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'cumin', qty: 0.5, unit: 'cc' },
    ],
    nutrition: { kcal: 330, protein: 15, carbs: 18, fat: 22 },
    diet: ['vegetarien', 'sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['recuperation'], reheatable: false,
  }),
  dish({
    id: 'brik-oeuf', name: 'Brik à l’œuf', cuisine: 'tunisien', mealTypes: ['dejeuner'], timeMinutes: 20, spice: 1,
    steps: ['Déposer un œuf et du thon au centre d’une feuille de brick.', 'Plier en triangle, sceller avec le jaune.', 'Frire 1 à 2 min par face dans l’huile chaude.'],
    ingredients: [
      { ingredient: 'oeuf', qty: 1, unit: 'piece' }, { ingredient: 'thon', qty: 40, unit: 'g', optional: true },
      { ingredient: 'persil', qty: 1, unit: 'cs', optional: true }, { ingredient: 'huile-olive', qty: 2, unit: 'cs' },
      { ingredient: 'farine', qty: 10, unit: 'g' }, { ingredient: 'sel', qty: 1, unit: 'pincee' },
    ],
    nutrition: { kcal: 380, protein: 18, carbs: 28, fat: 22 },
    diet: ['sans-lactose', 'sans-porc', 'halal'], sportRoles: [], reheatable: false,
  }),
  dish({
    id: 'mloukhia-simple', name: 'Mloukhia simplifiée', cuisine: 'tunisien', mealTypes: ['diner'], timeMinutes: 60, spice: 1,
    steps: ['Faire revenir l’oignon et la viande dans l’huile.', 'Ajouter le bouillon, l’ail et la tomate, laisser cuire 30 min.', 'Ajouter les épinards hachés et le citron, cuire 10 min.'],
    ingredients: [
      { ingredient: 'agneau', qty: 100, unit: 'g' }, { ingredient: 'epinard', qty: 120, unit: 'g' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'ail', qty: 2, unit: 'piece' },
      { ingredient: 'concentre-tomate', qty: 1, unit: 'cs' }, { ingredient: 'bouillon', qty: 300, unit: 'ml' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'citron', qty: 0.5, unit: 'piece' },
    ],
    nutrition: { kcal: 480, protein: 30, carbs: 14, fat: 34 },
    diet: ['sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['recuperation'], reheatable: true,
  }),
  dish({
    id: 'slata-mechouia', name: 'Slata mechouia', cuisine: 'tunisien', mealTypes: ALL_MEALS, timeMinutes: 30, spice: 2,
    steps: ['Griller poivrons, tomates et piment au four jusqu’à ce que la peau noircisse.', 'Éplucher, couper, assaisonner d’ail, huile et citron.', 'Servir froid avec du thon.'],
    ingredients: [
      { ingredient: 'poivron', qty: 1, unit: 'piece' }, { ingredient: 'tomate', qty: 120, unit: 'g' },
      { ingredient: 'piment', qty: 1, unit: 'piece' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'citron', qty: 0.5, unit: 'piece' },
      { ingredient: 'thon', qty: 50, unit: 'g', optional: true },
    ],
    nutrition: { kcal: 260, protein: 10, carbs: 14, fat: 16 },
    diet: ['sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['leger'], reheatable: false,
  }),
  dish({
    id: 'couscous-poisson', name: 'Couscous au poisson (version rapide)', cuisine: 'tunisien', mealTypes: ['dejeuner'], timeMinutes: 50, spice: 2,
    steps: ['Cuire les légumes et la sauce tomate-harissa 20 min.', 'Ajouter le poisson et cuire 10 min.', 'Servir sur la semoule humidifiée et cuite à la vapeur.'],
    ingredients: [
      { ingredient: 'semoule', qty: 100, unit: 'g' }, { ingredient: 'sardine', qty: 120, unit: 'g' },
      { ingredient: 'carotte', qty: 0.5, unit: 'piece' }, { ingredient: 'courgette', qty: 0.5, unit: 'piece' },
      { ingredient: 'tomate', qty: 100, unit: 'g' }, { ingredient: 'harissa', qty: 1, unit: 'cc' },
      { ingredient: 'pois-chiche', qty: 30, unit: 'g', optional: true }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 620, protein: 36, carbs: 72, fat: 18 },
    diet: ['sans-lactose', 'sans-porc', 'halal'], sportRoles: ['post-effort'], reheatable: true,
  }),
  dish({
    id: 'bsisa', name: 'Bsissa (farine grillée au cumin)', cuisine: 'tunisien', mealTypes: ['petit-dejeuner', 'gouter'], timeMinutes: 15, spice: 0,
    steps: ['Mélanger la farine grillée avec le cumin, le sel et l’huile.', 'Ajouter un peu d’eau ou de lait pour former une pâte friable.', 'Servir en collation ou en petit-déjeuner.'],
    ingredients: [
      { ingredient: 'farine', qty: 60, unit: 'g' }, { ingredient: 'cumin', qty: 1, unit: 'cc' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'sel', qty: 1, unit: 'pincee' },
      { ingredient: 'lait', qty: 50, unit: 'ml', optional: true },
    ],
    nutrition: { kcal: 280, protein: 7, carbs: 42, fat: 10 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: ['pre-effort'], reheatable: false,
  }),

  // ───────────── Italien ─────────────
  dish({
    id: 'spaghetti-aglio-olio', name: 'Spaghetti aglio, olio e peperoncino', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 15, spice: 2,
    steps: ['Cuire les pâtes al dente.', 'Faire dorer l’ail et le piment dans l’huile.', 'Mélanger les pâtes avec l’huile et un peu d’eau de cuisson.'],
    ingredients: [
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'ail', qty: 2, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 2, unit: 'cs' }, { ingredient: 'piment', qty: 0.5, unit: 'piece' },
      { ingredient: 'persil', qty: 1, unit: 'cs', optional: true }, { ingredient: 'parmesan', qty: 15, unit: 'g', optional: true },
    ],
    nutrition: { kcal: 520, protein: 14, carbs: 78, fat: 18 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: ['pre-effort'], reheatable: false,
  }),
  dish({
    id: 'pasta-pomodoro-basilic', name: 'Pâtes à la tomate et au basilic', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 25, spice: 0,
    steps: ['Faire revenir l’ail et l’oignon dans l’huile.', 'Ajouter les tomates concassées et laisser réduire 15 min.', 'Mélanger aux pâtes cuites, parsemer de basilic.'],
    ingredients: [
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'tomate', qty: 150, unit: 'g' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'basilic', qty: 5, unit: 'piece' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
      { ingredient: 'parmesan', qty: 10, unit: 'g', optional: true },
    ],
    nutrition: { kcal: 480, protein: 14, carbs: 80, fat: 12 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: ['pre-effort'], reheatable: true,
  }),
  dish({
    id: 'pasta-norma', name: 'Pâtes alla Norma', cuisine: 'italien', mealTypes: ['diner'], timeMinutes: 40, spice: 0,
    steps: ['Faire dorer l’aubergine en cubes dans l’huile.', 'Préparer une sauce tomate-ail-basilic.', 'Mélanger aux pâtes, ajouter la ricotta salée ou le pecorino.'],
    ingredients: [
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'aubergine', qty: 0.5, unit: 'piece' },
      { ingredient: 'tomate', qty: 150, unit: 'g' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'basilic', qty: 5, unit: 'piece' }, { ingredient: 'huile-olive', qty: 2, unit: 'cs' },
      { ingredient: 'pecorino', qty: 20, unit: 'g', optional: true },
    ],
    nutrition: { kcal: 560, protein: 15, carbs: 78, fat: 20 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: [], reheatable: true,
  }),
  dish({
    id: 'pasta-tonno-capperi', name: 'Pâtes au thon et aux câpres', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 15, spice: 0,
    steps: ['Cuire les pâtes.', 'Émietter le thon et le mélanger à l’huile, l’ail, les câpres et le citron.', 'Mélanger aux pâtes égouttées.'],
    ingredients: [
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'thon', qty: 80, unit: 'g' },
      { ingredient: 'capre', qty: 1, unit: 'cs' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
      { ingredient: 'ail', qty: 1, unit: 'piece' }, { ingredient: 'citron', qty: 0.25, unit: 'piece' },
      { ingredient: 'persil', qty: 1, unit: 'cs', optional: true },
    ],
    nutrition: { kcal: 540, protein: 32, carbs: 74, fat: 14 },
    diet: ['sans-porc', 'halal'], sportRoles: ['post-effort'], reheatable: true,
  }),
  dish({
    id: 'pasta-e-ceci', name: 'Pasta e ceci', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 35, spice: 1,
    steps: ['Faire revenir l’ail, le romarin ou le persil et l’oignon.', 'Ajouter les pois chiches et un peu de bouillon.', 'Ajouter les pâtes courtes et cuire jusqu’à ce qu’elles soient tendres.'],
    ingredients: [
      { ingredient: 'pois-chiche', qty: 80, unit: 'g' }, { ingredient: 'pates', qty: 70, unit: 'g' },
      { ingredient: 'ail', qty: 1, unit: 'piece' }, { ingredient: 'oignon', qty: 0.5, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'bouillon', qty: 300, unit: 'ml' },
      { ingredient: 'piment', qty: 0.25, unit: 'piece', optional: true },
    ],
    nutrition: { kcal: 470, protein: 18, carbs: 72, fat: 12 },
    diet: ['vegetarien', 'vegan', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['pre-effort'], reheatable: true,
  }),
  dish({
    id: 'caponata', name: 'Caponata sicilienne', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 45, spice: 0,
    steps: ['Faire dorer l’aubergine et la courgette dans l’huile.', 'Ajouter oignon, tomate, câpres et olives.', 'Ajouter le vinaigre et le miel, laisser tiédir.'],
    ingredients: [
      { ingredient: 'aubergine', qty: 0.5, unit: 'piece' }, { ingredient: 'courgette', qty: 0.5, unit: 'piece' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'tomate', qty: 120, unit: 'g' },
      { ingredient: 'capre', qty: 1, unit: 'cs' }, { ingredient: 'olive', qty: 10, unit: 'piece' },
      { ingredient: 'vinaigre', qty: 1, unit: 'cs' }, { ingredient: 'miel', qty: 1, unit: 'cc' },
      { ingredient: 'huile-olive', qty: 2, unit: 'cs' },
    ],
    nutrition: { kcal: 300, protein: 4, carbs: 22, fat: 20 },
    diet: ['vegetarien', 'vegan', 'sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['leger'], reheatable: true,
  }),
  dish({
    id: 'frittata-epinards', name: 'Frittata aux épinards', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 25, spice: 0,
    steps: ['Faire tomber les épinards dans l’huile avec l’ail.', 'Battre les œufs avec le parmesan et verser sur les épinards.', 'Cuire à feu doux puis finir sous le gril 3 min.'],
    ingredients: [
      { ingredient: 'oeuf', qty: 2, unit: 'piece' }, { ingredient: 'epinard', qty: 100, unit: 'g' },
      { ingredient: 'parmesan', qty: 15, unit: 'g' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'sel', qty: 1, unit: 'pincee' },
    ],
    nutrition: { kcal: 350, protein: 24, carbs: 6, fat: 25 },
    diet: ['vegetarien', 'sans-gluten', 'sans-porc', 'halal'], sportRoles: ['recuperation'], reheatable: false,
  }),
  dish({
    id: 'pollo-cacciatora', name: 'Poulet alla cacciatora', cuisine: 'italien', mealTypes: ['diner'], timeMinutes: 50, spice: 1,
    steps: ['Dorer le poulet dans l’huile.', 'Ajouter oignon, poivron, tomate et herbes.', 'Mijoter 30 min à couvert.'],
    ingredients: [
      { ingredient: 'poulet', qty: 150, unit: 'g' }, { ingredient: 'poivron', qty: 0.5, unit: 'piece' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'tomate', qty: 150, unit: 'g' },
      { ingredient: 'basilic', qty: 3, unit: 'piece' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 420, protein: 42, carbs: 12, fat: 20 },
    diet: ['sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['post-effort', 'recuperation'], reheatable: true,
  }),
  dish({
    id: 'risotto-simple', name: 'Risotto simple au parmesan', cuisine: 'italien', mealTypes: ['diner'], timeMinutes: 35, spice: 0,
    steps: ['Faire revenir l’oignon dans le beurre.', 'Ajouter le riz et le bouillon chaud louche par louche.', 'Finir avec du beurre et du parmesan.'],
    ingredients: [
      { ingredient: 'riz', qty: 80, unit: 'g' }, { ingredient: 'bouillon', qty: 300, unit: 'ml' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'beurre', qty: 10, unit: 'g' },
      { ingredient: 'parmesan', qty: 20, unit: 'g' },
    ],
    nutrition: { kcal: 460, protein: 12, carbs: 66, fat: 16 },
    diet: ['vegetarien', 'sans-gluten', 'sans-porc', 'halal'], sportRoles: [], reheatable: false,
  }),
  dish({
    id: 'carbonara', name: 'Carbonara (version guanciale)', cuisine: 'italien', mealTypes: ['diner'], timeMinutes: 20, spice: 0,
    steps: ['Faire revenir les lardons jusqu’à ce qu’ils soient croustillants.', 'Mélanger œufs, parmesan et poivre.', 'Hors du feu, mélanger les pâtes chaudes avec la préparation et les lardons.'],
    ingredients: [
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'lardons', qty: 50, unit: 'g' },
      { ingredient: 'oeuf', qty: 1, unit: 'piece' }, { ingredient: 'parmesan', qty: 20, unit: 'g' },
      { ingredient: 'poivre', qty: 1, unit: 'pincee' },
    ],
    nutrition: { kcal: 680, protein: 26, carbs: 70, fat: 32 },
    diet: [], sportRoles: [], reheatable: false,
  }),
  dish({
    id: 'pasta-pesto-courgette', name: 'Pâtes au pesto et aux courgettes', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 20, spice: 0,
    steps: ['Faire sauter les courgettes en fines lamelles dans l’huile.', 'Mixer basilic, ail, parmesan et huile pour faire un pesto.', 'Mélanger aux pâtes avec le pesto et les courgettes.'],
    ingredients: [
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'courgette', qty: 0.5, unit: 'piece' },
      { ingredient: 'basilic', qty: 10, unit: 'piece' }, { ingredient: 'parmesan', qty: 15, unit: 'g' },
      { ingredient: 'ail', qty: 1, unit: 'piece' }, { ingredient: 'huile-olive', qty: 2, unit: 'cs' },
    ],
    nutrition: { kcal: 520, protein: 16, carbs: 70, fat: 20 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: ['pre-effort'], reheatable: false,
  }),

  // ───────────── Fusion tuniso-italienne (signature) ─────────────
  dish({
    id: 'pates-harissa-citron', name: 'Pâtes à la harissa et au citron confit', cuisine: 'fusion', mealTypes: ALL_MEALS, timeMinutes: 20, spice: 2,
    steps: ['Cuire les pâtes.', 'Diluer la harissa dans l’huile, ajouter l’ail et le citron confit haché.', 'Mélanger aux pâtes avec un peu d’eau de cuisson.'],
    ingredients: [
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'harissa', qty: 1, unit: 'cc' },
      { ingredient: 'citron-confit', qty: 0.5, unit: 'piece' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 2, unit: 'cs' }, { ingredient: 'parmesan', qty: 10, unit: 'g', optional: true },
    ],
    nutrition: { kcal: 510, protein: 14, carbs: 76, fat: 16 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: ['pre-effort'], reheatable: false,
  }),
  dish({
    id: 'spaghetti-thon-harissa', name: 'Spaghetti au thon, câpres et harissa', cuisine: 'fusion', mealTypes: ALL_MEALS, timeMinutes: 18, spice: 2,
    steps: ['Cuire les pâtes.', 'Faire revenir l’ail et la harissa dans l’huile, ajouter le thon et les câpres.', 'Mélanger aux pâtes.'],
    ingredients: [
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'thon', qty: 80, unit: 'g' },
      { ingredient: 'harissa', qty: 1, unit: 'cc' }, { ingredient: 'capre', qty: 1, unit: 'cs' },
      { ingredient: 'ail', qty: 1, unit: 'piece' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 540, protein: 32, carbs: 74, fat: 14 },
    diet: ['sans-porc', 'halal'], sportRoles: ['post-effort'], reheatable: true,
  }),
  dish({
    id: 'ojja-pecorino', name: 'Ojja au pecorino', cuisine: 'fusion', mealTypes: ['diner'], timeMinutes: 30, spice: 3,
    steps: ['Préparer une sauce tomate-harissa-poivron comme pour la chakchouka.', 'Ajouter les merguez coupées et cuire 10 min.', 'Casser les œufs dessus et parsemer de pecorino.'],
    ingredients: [
      { ingredient: 'merguez', qty: 100, unit: 'g' }, { ingredient: 'oeuf', qty: 1, unit: 'piece' },
      { ingredient: 'tomate', qty: 150, unit: 'g' }, { ingredient: 'poivron', qty: 0.5, unit: 'piece' },
      { ingredient: 'harissa', qty: 1, unit: 'cc' }, { ingredient: 'pecorino', qty: 20, unit: 'g' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 560, protein: 26, carbs: 14, fat: 42 },
    diet: ['sans-gluten', 'sans-porc', 'halal'], sportRoles: ['post-effort'], reheatable: false,
  }),
  dish({
    id: 'lablabi-ricotta', name: 'Lablabi crémeux à la ricotta', cuisine: 'fusion', mealTypes: ['dejeuner'], timeMinutes: 25, spice: 1,
    steps: ['Mixer les pois chiches avec l’ail, le cumin et un peu d’huile.', 'Ajouter la ricotta et le bouillon pour une texture crémeuse.', 'Servir avec du pain grillé et du citron.'],
    ingredients: [
      { ingredient: 'pois-chiche', qty: 90, unit: 'g' }, { ingredient: 'ricotta', qty: 40, unit: 'g' },
      { ingredient: 'cumin', qty: 0.5, unit: 'cc' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'pain', qty: 50, unit: 'g' }, { ingredient: 'citron', qty: 0.25, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'bouillon', qty: 150, unit: 'ml' },
    ],
    nutrition: { kcal: 460, protein: 20, carbs: 52, fat: 18 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: ['pre-effort'], reheatable: false,
  }),

  // ───────────── Plats sportifs légers ─────────────
  dish({
    id: 'porridge-banane', name: 'Porridge banane et amandes', cuisine: 'fusion', mealTypes: ['dejeuner'], timeMinutes: 10, spice: 0,
    steps: ['Cuire les flocons d’avoine dans le lait ou l’eau.', 'Ajouter la banane écrasée et le miel.', 'Parsemer d’amandes concassées.'],
    ingredients: [
      { ingredient: 'flocons-avoine', qty: 60, unit: 'g' }, { ingredient: 'lait', qty: 200, unit: 'ml' },
      { ingredient: 'banane', qty: 1, unit: 'piece' }, { ingredient: 'amande', qty: 15, unit: 'g' },
      { ingredient: 'miel', qty: 1, unit: 'cc' },
    ],
    nutrition: { kcal: 480, protein: 16, carbs: 70, fat: 14 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: ['pre-effort'], reheatable: false,
  }),
  dish({
    id: 'soupe-lentilles-corail', name: 'Soupe de lentilles corail', cuisine: 'fusion', mealTypes: ['diner'], timeMinutes: 25, spice: 1,
    steps: ['Faire revenir oignon, carotte et cumin.', 'Ajouter les lentilles et le bouillon, cuire 15 min.', 'Mixer et finir au citron.'],
    ingredients: [
      { ingredient: 'lentilles-corail', qty: 80, unit: 'g' }, { ingredient: 'carotte', qty: 0.5, unit: 'piece' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'cumin', qty: 0.5, unit: 'cc' },
      { ingredient: 'bouillon', qty: 400, unit: 'ml' }, { ingredient: 'citron', qty: 0.25, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 340, protein: 20, carbs: 48, fat: 7 },
    diet: ['vegetarien', 'vegan', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['recuperation', 'leger'], reheatable: true,
  }),
];

export const DISHES: Dish[] = [...BASE_DISHES, ...EXTRA_DISHES, ...EXTRA_DISHES_2, ...EXTRA_DISHES_3, ...EXTRA_DISHES_4, ...EXTRA_DISHES_5];

export const DISH_BY_ID: Record<string, Dish> = Object.fromEntries(DISHES.map((d) => [d.id, d]));

export const ALL_DIET_TAGS: DietTag[] = ['vegetarien', 'vegan', 'sans-gluten', 'sans-lactose', 'sans-porc', 'halal'];
export const ALL_SPORT_ROLES: SportRole[] = ['pre-effort', 'post-effort', 'recuperation', 'leger'];
