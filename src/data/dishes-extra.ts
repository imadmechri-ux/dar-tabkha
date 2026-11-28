import type { Dish } from '../types';

// Plats supplémentaires (phase 1b). Même format que dishes.ts.
// Valeurs nutritionnelles : estimations ; verified: false tant que non validé.
const ALL_MEALS: Dish['mealTypes'] = ['dejeuner', 'diner'];

function dish(p: Omit<Dish, 'verified' | 'reheatable'> & { reheatable?: boolean }): Dish {
  return { verified: false, reheatable: false, ...p };
}

export const EXTRA_DISHES: Dish[] = [
  // ───────────── Tunisien ─────────────
  dish({
    id: 'tajine-oeufs-pdt', name: 'Tajine tunisien aux pommes de terre et œufs', cuisine: 'tunisien', mealTypes: ALL_MEALS, timeMinutes: 40, spice: 0,
    steps: ['Cuire les pommes de terre en rondelles.', 'Faire revenir oignon et ail, disposer les pommes de terre.', 'Battre les œufs, verser et cuire au four ou à couvert.'],
    ingredients: [
      { ingredient: 'pomme-de-terre', qty: 150, unit: 'g' }, { ingredient: 'oeuf', qty: 2, unit: 'piece' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'persil', qty: 1, unit: 'cs' }, { ingredient: 'huile-olive', qty: 2, unit: 'cs' },
    ],
    nutrition: { kcal: 430, protein: 18, carbs: 46, fat: 20 },
    diet: ['vegetarien', 'sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['recuperation'],
  }),
  dish({
    id: 'chorba-frik', name: 'Chorba frik (soupe de blé vert)', cuisine: 'tunisien', mealTypes: ['dejeuner', 'diner'], timeMinutes: 60, spice: 1,
    steps: ['Faire revenir l’agneau avec oignon et carotte.', 'Ajouter tomate, concentré, épices et bouillon, cuire 30 min.', 'Ajouter le frik et cuire 15 min, puis finir au persil et au citron.'],
    ingredients: [
      { ingredient: 'agneau', qty: 100, unit: 'g' }, { ingredient: 'frik', qty: 50, unit: 'g' },
      { ingredient: 'tomate', qty: 120, unit: 'g' }, { ingredient: 'concentre-tomate', qty: 1, unit: 'cc' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'carotte', qty: 0.5, unit: 'piece' },
      { ingredient: 'ail', qty: 1, unit: 'piece' }, { ingredient: 'cumin', qty: 0.5, unit: 'cc' },
      { ingredient: 'bouillon', qty: 400, unit: 'ml' }, { ingredient: 'persil', qty: 1, unit: 'cs' },
      { ingredient: 'citron', qty: 0.25, unit: 'piece' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 470, protein: 28, carbs: 46, fat: 18 },
    diet: ['sans-lactose', 'sans-porc', 'halal'], sportRoles: ['recuperation'], reheatable: true,
  }),
  dish({
    id: 'fricasse-thon', name: 'Fricassé au thon', cuisine: 'tunisien', mealTypes: ['dejeuner'], timeMinutes: 25, spice: 2,
    steps: ['Préparer la pâte de beignet avec la farine et de l’eau.', 'Frire le beignet puis le fendre.', 'Garnir de thon, harissa, olive, œuf et citron.'],
    ingredients: [
      { ingredient: 'farine', qty: 60, unit: 'g' }, { ingredient: 'thon', qty: 60, unit: 'g' },
      { ingredient: 'oeuf', qty: 1, unit: 'piece' }, { ingredient: 'olive', qty: 5, unit: 'piece' },
      { ingredient: 'harissa', qty: 1, unit: 'cc' }, { ingredient: 'citron', qty: 0.25, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 2, unit: 'cs' }, { ingredient: 'persil', qty: 1, unit: 'cs', optional: true },
    ],
    nutrition: { kcal: 560, protein: 30, carbs: 56, fat: 22 },
    diet: ['sans-lactose', 'sans-porc', 'halal'], sportRoles: ['post-effort'],
  }),
  dish({
    id: 'kafteji', name: 'Kafteji (poêlée de légumes frits à la harissa)', cuisine: 'tunisien', mealTypes: ALL_MEALS, timeMinutes: 35, spice: 2,
    steps: ['Faire frire séparément poivron, pomme de terre et courgette.', 'Faire revenir oignon, ail, cumin et paprika.', 'Mélanger tous les légumes avec la harissa et servir chaud.'],
    ingredients: [
      { ingredient: 'poivron', qty: 1, unit: 'piece' }, { ingredient: 'pomme-de-terre', qty: 150, unit: 'g' },
      { ingredient: 'courgette', qty: 0.5, unit: 'piece' }, { ingredient: 'oignon', qty: 0.5, unit: 'piece' },
      { ingredient: 'ail', qty: 1, unit: 'piece' }, { ingredient: 'harissa', qty: 1, unit: 'cc' },
      { ingredient: 'cumin', qty: 0.5, unit: 'cc' }, { ingredient: 'paprika', qty: 0.5, unit: 'cc' },
      { ingredient: 'huile-olive', qty: 3, unit: 'cs' }, { ingredient: 'oeuf', qty: 1, unit: 'piece', optional: true },
    ],
    nutrition: { kcal: 420, protein: 9, carbs: 52, fat: 20 },
    diet: ['vegetarien', 'sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['leger'],
  }),
  dish({
    id: 'ojja-crevettes', name: 'Ojja aux crevettes', cuisine: 'tunisien', mealTypes: ALL_MEALS, timeMinutes: 25, spice: 2,
    steps: ['Faire revenir oignon, poivron et ail.', 'Ajouter tomates, concentré et harissa, laisser réduire.', 'Ajouter les crevettes 4 à 5 minutes, puis le persil.'],
    ingredients: [
      { ingredient: 'crevette', qty: 150, unit: 'g' }, { ingredient: 'tomate', qty: 150, unit: 'g' },
      { ingredient: 'poivron', qty: 0.5, unit: 'piece' }, { ingredient: 'oignon', qty: 0.5, unit: 'piece' },
      { ingredient: 'ail', qty: 1, unit: 'piece' }, { ingredient: 'harissa', qty: 1, unit: 'cc' },
      { ingredient: 'concentre-tomate', qty: 1, unit: 'cs' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
      { ingredient: 'persil', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 380, protein: 34, carbs: 18, fat: 16 },
    diet: ['sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['post-effort', 'recuperation'], reheatable: false,
  }),
  dish({
    id: 'couscous-poulet', name: 'Couscous au poulet', cuisine: 'tunisien', mealTypes: ['dejeuner'], timeMinutes: 60, spice: 1,
    steps: ['Faire dorer le poulet avec oignon et épices.', 'Ajouter légumes et tomate, mijoter 30 min.', 'Cuire la semoule à la vapeur et servir avec la sauce.'],
    ingredients: [
      { ingredient: 'semoule', qty: 100, unit: 'g' }, { ingredient: 'poulet', qty: 150, unit: 'g' },
      { ingredient: 'carotte', qty: 0.5, unit: 'piece' }, { ingredient: 'courgette', qty: 0.5, unit: 'piece' },
      { ingredient: 'tomate', qty: 100, unit: 'g' }, { ingredient: 'oignon', qty: 0.5, unit: 'piece' },
      { ingredient: 'harissa', qty: 1, unit: 'cc', optional: true }, { ingredient: 'pois-chiche', qty: 30, unit: 'g', optional: true },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 610, protein: 40, carbs: 70, fat: 16 },
    diet: ['sans-lactose', 'sans-porc', 'halal'], sportRoles: ['post-effort'], reheatable: true,
  }),
  dish({
    id: 'salade-tunisienne', name: 'Salade tunisienne', cuisine: 'tunisien', mealTypes: ALL_MEALS, timeMinutes: 15, spice: 0,
    steps: ['Couper tomates, poivron, oignon et concombre en petits dés.', 'Ajouter le thon émietté, l’œuf dur et les olives.', 'Assaisonner d’huile, citron et persil.'],
    ingredients: [
      { ingredient: 'tomate', qty: 150, unit: 'g' }, { ingredient: 'poivron', qty: 0.5, unit: 'piece' },
      { ingredient: 'oignon', qty: 0.25, unit: 'piece' }, { ingredient: 'concombre', qty: 0.5, unit: 'piece' },
      { ingredient: 'thon', qty: 60, unit: 'g' }, { ingredient: 'oeuf', qty: 1, unit: 'piece' },
      { ingredient: 'olive', qty: 8, unit: 'piece' }, { ingredient: 'citron', qty: 0.5, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'persil', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 340, protein: 22, carbs: 14, fat: 22 },
    diet: ['sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['leger'],
  }),

  // ───────────── Italien ─────────────
  dish({
    id: 'ragu-bolognese', name: 'Ragù alla bolognese', cuisine: 'italien', mealTypes: ['diner'], timeMinutes: 60, spice: 0,
    steps: ['Faire revenir oignon, carotte et ail.', 'Ajouter la viande et la faire dorer.', 'Ajouter tomates et concentré, mijoter 40 min, servir avec les pâtes.'],
    ingredients: [
      { ingredient: 'boeuf', qty: 100, unit: 'g' }, { ingredient: 'tomate', qty: 150, unit: 'g' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'carotte', qty: 0.5, unit: 'piece' },
      { ingredient: 'ail', qty: 1, unit: 'piece' }, { ingredient: 'concentre-tomate', qty: 1, unit: 'cs' },
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 640, protein: 34, carbs: 80, fat: 20 },
    diet: ['sans-porc', 'halal'], sportRoles: ['post-effort'], reheatable: true,
  }),
  dish({
    id: 'minestrone', name: 'Minestrone', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 45, spice: 0,
    steps: ['Faire revenir oignon, carotte et ail.', 'Ajouter le bouillon, les haricots et les légumes, cuire 25 min.', 'Ajouter les pâtes et le basilic, cuire encore 8 minutes.'],
    ingredients: [
      { ingredient: 'haricot-blanc', qty: 60, unit: 'g' }, { ingredient: 'carotte', qty: 0.5, unit: 'piece' },
      { ingredient: 'courgette', qty: 0.5, unit: 'piece' }, { ingredient: 'tomate', qty: 100, unit: 'g' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'pates', qty: 40, unit: 'g' },
      { ingredient: 'bouillon', qty: 400, unit: 'ml' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'basilic', qty: 3, unit: 'piece' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 420, protein: 16, carbs: 72, fat: 8 },
    diet: ['vegetarien', 'vegan', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['leger'], reheatable: true,
  }),
  dish({
    id: 'cacio-e-pepe', name: 'Cacio e pepe', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 15, spice: 0,
    steps: ['Cuire les pâtes et garder de l’eau.', 'Mélanger le pecorino avec un peu d’eau pour une crème.', 'Ajouter les pâtes, le poivre et la crème, en remuant hors du feu.'],
    ingredients: [
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'pecorino', qty: 30, unit: 'g' },
      { ingredient: 'poivre', qty: 1, unit: 'pincee' },
    ],
    nutrition: { kcal: 560, protein: 22, carbs: 74, fat: 18 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: ['pre-effort'],
  }),
  dish({
    id: 'parmigiana', name: 'Parmigiana di melanzane', cuisine: 'italien', mealTypes: ['diner'], timeMinutes: 60, spice: 0,
    steps: ['Griller les tranches d’aubergine.', 'Préparer une sauce tomate-basilic.', 'Alterner aubergines, sauce, mozzarella et parmesan, puis gratiner.'],
    ingredients: [
      { ingredient: 'aubergine', qty: 0.5, unit: 'piece' }, { ingredient: 'tomate', qty: 150, unit: 'g' },
      { ingredient: 'mozzarella', qty: 40, unit: 'g' }, { ingredient: 'parmesan', qty: 20, unit: 'g' },
      { ingredient: 'basilic', qty: 5, unit: 'piece' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 2, unit: 'cs' },
    ],
    nutrition: { kcal: 480, protein: 20, carbs: 22, fat: 34 },
    diet: ['vegetarien', 'sans-gluten', 'sans-porc', 'halal'], sportRoles: [], reheatable: true,
  }),
  dish({
    id: 'caprese', name: 'Insalata caprese', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 10, spice: 0,
    steps: ['Couper tomates et mozzarella en tranches.', 'Alterner avec les feuilles de basilic.', 'Arroser d’huile, saler et poivrer.'],
    ingredients: [
      { ingredient: 'tomate', qty: 150, unit: 'g' }, { ingredient: 'mozzarella', qty: 60, unit: 'g' },
      { ingredient: 'basilic', qty: 6, unit: 'piece' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
      { ingredient: 'vinaigre', qty: 1, unit: 'cc', optional: true },
    ],
    nutrition: { kcal: 380, protein: 20, carbs: 10, fat: 28 },
    diet: ['vegetarien', 'sans-gluten', 'sans-porc', 'halal'], sportRoles: ['leger'],
  }),
  dish({
    id: 'panzanella', name: 'Panzanella', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 15, spice: 0,
    steps: ['Couper le pain en cubes et le faire griller.', 'Couper tomates, concombre et oignon.', 'Mélanger avec l’huile, le vinaigre et le basilic, laisser reposer.'],
    ingredients: [
      { ingredient: 'pain', qty: 60, unit: 'g' }, { ingredient: 'tomate', qty: 120, unit: 'g' },
      { ingredient: 'concombre', qty: 0.5, unit: 'piece' }, { ingredient: 'oignon', qty: 0.25, unit: 'piece' },
      { ingredient: 'basilic', qty: 5, unit: 'piece' }, { ingredient: 'vinaigre', qty: 1, unit: 'cs' },
      { ingredient: 'huile-olive', qty: 2, unit: 'cs' },
    ],
    nutrition: { kcal: 380, protein: 8, carbs: 52, fat: 16 },
    diet: ['vegetarien', 'vegan', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['leger'], reheatable: false,
  }),
  dish({
    id: 'puttanesca', name: 'Pasta alla puttanesca', cuisine: 'italien', mealTypes: ALL_MEALS, timeMinutes: 20, spice: 2,
    steps: ['Faire fondre anchois et ail dans l’huile.', 'Ajouter tomates, olives, câpres et piment, cuire 10 min.', 'Mélanger aux pâtes avec le persil.'],
    ingredients: [
      { ingredient: 'pates', qty: 90, unit: 'g' }, { ingredient: 'tomate', qty: 150, unit: 'g' },
      { ingredient: 'olive', qty: 10, unit: 'piece' }, { ingredient: 'capre', qty: 1, unit: 'cs' },
      { ingredient: 'anchois', qty: 2, unit: 'piece' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'piment', qty: 0.25, unit: 'piece' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
      { ingredient: 'persil', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 520, protein: 16, carbs: 76, fat: 16 },
    diet: ['sans-lactose', 'sans-porc', 'halal'], sportRoles: ['pre-effort'], reheatable: true,
  }),

  // ───────────── Sportif ─────────────
  dish({
    id: 'bowl-quinoa-poulet', name: 'Bowl quinoa, poulet et avocat', cuisine: 'fusion', mealTypes: ALL_MEALS, timeMinutes: 20, spice: 0,
    steps: ['Cuire le quinoa.', 'Saisir le poulet en dés.', 'Dresser avec avocat, concombre, tomate et citron.'],
    ingredients: [
      { ingredient: 'quinoa', qty: 70, unit: 'g' }, { ingredient: 'poulet', qty: 150, unit: 'g' },
      { ingredient: 'avocat', qty: 0.5, unit: 'piece' }, { ingredient: 'concombre', qty: 0.5, unit: 'piece' },
      { ingredient: 'tomate', qty: 80, unit: 'g' }, { ingredient: 'citron', qty: 0.25, unit: 'piece' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 560, protein: 44, carbs: 48, fat: 20 },
    diet: ['sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['post-effort', 'recuperation'], reheatable: true,
  }),
  dish({
    id: 'yaourt-banane-avoine', name: 'Yaourt, banane et avoine', cuisine: 'fusion', mealTypes: ['dejeuner'], timeMinutes: 5, spice: 0,
    steps: ['Mélanger l’avoine au yaourt.', 'Ajouter la banane en rondelles et le miel.', 'Parsemer d’amandes concassées.'],
    ingredients: [
      { ingredient: 'yaourt', qty: 150, unit: 'g' }, { ingredient: 'flocons-avoine', qty: 50, unit: 'g' },
      { ingredient: 'banane', qty: 1, unit: 'piece' }, { ingredient: 'miel', qty: 1, unit: 'cc' },
      { ingredient: 'amande', qty: 10, unit: 'g', optional: true },
    ],
    nutrition: { kcal: 430, protein: 20, carbs: 66, fat: 10 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: ['pre-effort'],
  }),

  // ───────────── Fusion ─────────────
  dish({
    id: 'pizza-harissa-mozzarella', name: 'Pizza harissa et mozzarella', cuisine: 'fusion', mealTypes: ['diner'], timeMinutes: 45, spice: 2,
    steps: ['Préparer la pâte et la laisser lever.', 'Étaler une sauce tomate relevée à la harissa.', 'Garnir de mozzarella et cuire 10 min à four très chaud.'],
    ingredients: [
      { ingredient: 'farine', qty: 100, unit: 'g' }, { ingredient: 'levure', qty: 0.5, unit: 'cc' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'tomate', qty: 60, unit: 'g' },
      { ingredient: 'harissa', qty: 1, unit: 'cc' }, { ingredient: 'mozzarella', qty: 50, unit: 'g' },
      { ingredient: 'basilic', qty: 3, unit: 'piece' },
    ],
    nutrition: { kcal: 620, protein: 24, carbs: 84, fat: 20 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: [], reheatable: true,
  }),
];

// ───────────── Petit-déjeuner, goûter et plats tunisiens supplémentaires ─────────────
export const EXTRA_DISHES_2: Dish[] = [
  dish({
    id: 'lben-pain-huile', name: 'Lben, pain et huile d’olive', cuisine: 'tunisien', mealTypes: ['petit-dejeuner'], timeMinutes: 5, spice: 0,
    steps: ['Verser le lben (ou yaourt nature délayé d’un peu d’eau) dans un bol.', 'Tremper ou tartiner le pain avec l’huile d’olive et le sel.', 'Ajouter les olives et servir.'],
    ingredients: [
      { ingredient: 'yaourt', qty: 200, unit: 'g' }, { ingredient: 'pain', qty: 60, unit: 'g' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'olive', qty: 4, unit: 'piece' },
    ],
    nutrition: { kcal: 380, protein: 14, carbs: 46, fat: 14 },
    diet: ['vegetarien', 'sans-porc', 'halal'], sportRoles: ['pre-effort'],
  }),
  dish({
    id: 'hergma-oeufs', name: 'Hergma, œufs à la tomate et au piment', cuisine: 'tunisien', mealTypes: ['petit-dejeuner', 'dejeuner', 'diner'], timeMinutes: 20, spice: 2,
    steps: ['Faire revenir oignon et ail dans l’huile.', 'Ajouter tomate, piment et cumin, cuire 10 minutes.', 'Casser les œufs dans la sauce et couvrir jusqu’à prise.'],
    ingredients: [
      { ingredient: 'oeuf', qty: 2, unit: 'piece' }, { ingredient: 'tomate', qty: 150, unit: 'g' },
      { ingredient: 'oignon', qty: 0.5, unit: 'piece' }, { ingredient: 'ail', qty: 1, unit: 'piece' },
      { ingredient: 'piment', qty: 0.5, unit: 'piece' }, { ingredient: 'cumin', qty: 0.5, unit: 'cc' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 340, protein: 17, carbs: 16, fat: 22 },
    diet: ['vegetarien', 'sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['recuperation'],
  }),
  dish({
    id: 'tartine-miel-huile', name: 'Tartine à l’huile d’olive et au miel', cuisine: 'tunisien', mealTypes: ['petit-dejeuner', 'gouter'], timeMinutes: 5, spice: 0,
    steps: ['Griller légèrement le pain.', 'Arroser d’huile d’olive et d’une pincée de sel.', 'Ajouter le miel et les amandes concassées.'],
    ingredients: [
      { ingredient: 'pain', qty: 60, unit: 'g' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
      { ingredient: 'miel', qty: 1, unit: 'cc' }, { ingredient: 'amande', qty: 10, unit: 'g', optional: true },
    ],
    nutrition: { kcal: 320, protein: 6, carbs: 42, fat: 14 },
    diet: ['vegetarien', 'vegan', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['pre-effort'],
  }),
  dish({
    id: 'makroud', name: 'Makroud aux dattes', cuisine: 'tunisien', mealTypes: ['gouter'], timeMinutes: 60, spice: 0,
    steps: ['Pétrir la semoule avec l’huile et un peu d’eau.', 'Garnir de pâte de dattes, former des losanges.', 'Frire, puis tremper dans le miel parfumé à la cannelle.'],
    ingredients: [
      { ingredient: 'semoule', qty: 60, unit: 'g' }, { ingredient: 'datte', qty: 40, unit: 'g' },
      { ingredient: 'huile-olive', qty: 1, unit: 'cs' }, { ingredient: 'miel', qty: 1, unit: 'cs' },
      { ingredient: 'cannelle', qty: 0.5, unit: 'cc' },
    ],
    nutrition: { kcal: 380, protein: 4, carbs: 62, fat: 14 },
    diet: ['vegetarien', 'vegan', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['pre-effort'],
  }),
  dish({
    id: 'sfenj', name: 'Sfenj, beignets tunisiens', cuisine: 'tunisien', mealTypes: ['gouter'], timeMinutes: 60, spice: 0,
    steps: ['Mélanger farine, levure et eau tiède en pâte souple.', 'Laisser lever 40 minutes.', 'Frire des boules aplaties, puis tremper dans le miel.'],
    ingredients: [
      { ingredient: 'farine', qty: 60, unit: 'g' }, { ingredient: 'levure', qty: 0.5, unit: 'cc' },
      { ingredient: 'huile-olive', qty: 2, unit: 'cs' }, { ingredient: 'miel', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 360, protein: 6, carbs: 52, fat: 14 },
    diet: ['vegetarien', 'vegan', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['pre-effort'],
  }),
  dish({
    id: 'malfouf-chou', name: 'Malfouf, chou farci à la viande', cuisine: 'tunisien', mealTypes: ['dejeuner', 'diner'], timeMinutes: 70, spice: 1,
    steps: ['Cuire les feuilles de chou à l’eau bouillante.', 'Mélanger viande hachée, riz ou semoule, oignon et épices.', 'Rouler les feuilles farcies et mijoter dans la sauce tomate.'],
    ingredients: [
      { ingredient: 'chou', qty: 150, unit: 'g' }, { ingredient: 'boeuf', qty: 100, unit: 'g' },
      { ingredient: 'riz', qty: 30, unit: 'g' }, { ingredient: 'oignon', qty: 0.5, unit: 'piece' },
      { ingredient: 'tomate', qty: 150, unit: 'g' }, { ingredient: 'concentre-tomate', qty: 1, unit: 'cs' },
      { ingredient: 'cumin', qty: 0.5, unit: 'cc' }, { ingredient: 'huile-olive', qty: 1, unit: 'cs' },
    ],
    nutrition: { kcal: 520, protein: 32, carbs: 48, fat: 20 },
    diet: ['sans-gluten', 'sans-lactose', 'sans-porc', 'halal'], sportRoles: ['post-effort'], reheatable: true,
  }),
];
