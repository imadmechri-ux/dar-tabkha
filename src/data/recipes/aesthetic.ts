import type { RecipeDetail } from './types';

export const RECIPES_AESTHETIC: Record<string, RecipeDetail> = {
  'labneh-zaatar': {
    intro: 'La labneh est un fromage frais au yaourt égoutté, très crémeux, typique du Levant et de la Tunisie. Étalée et arrosée d’huile d’olive et de za’atar, elle devient un plat au rendu très photogénique.',
    equipment: ['Un bol ou une petite assiette creuse', 'Une cuillère'],
    prepMinutes: 5, cookMinutes: 0,
    steps: [
      { title: 'Étaler', text: 'Étalez la labneh (100 g) au centre d’une assiette, en un disque régulier, avec le dos d’une cuillère.', minutes: 1 },
      { title: 'Creuser', text: 'Faites un petit creux au centre pour recevoir l’huile.', minutes: 1 },
      { title: 'Arroser', text: 'Versez l’huile d’olive (une cuillère à soupe) dans le creux, en filet.', minutes: 1 },
      { title: 'Saupoudrer', text: 'Saupoudrez le za’atar (une cuillère à café) sur le dessus, en laissant des bords nus.', minutes: 1 },
      { title: 'Servir', text: 'Servez avec du pain et le concombre en tranches si vous en mettez.', minutes: 1 },
    ],
    tips: ['Le za’atar grillé à sec pendant une minute sort davantage son parfum.', 'Si la labneh est trop épaisse, ajoutez une cuillère d’eau et fouettez.', 'Un filet d’huile bien vert donne plus de contraste.'],
    serve: 'Avec du pain pita ou du pain tunisien grillé, des tranches de concombre et des olives.',
    storage: 'La labneh se garde 3 jours au frais. Le za’atar et l’huile se rajoutent au moment de servir.',
  },

  'parfait-fraises-granola': {
    intro: 'Un parfait en verre, en couches : yaourt, fruits rouges et granola maison. Une présentation très prisée, facile à réussir et très légère.',
    equipment: ['Un four ou une poêle', 'Un verre transparent ou un bol', 'Un couteau'],
    prepMinutes: 10, cookMinutes: 8,
    steps: [
      { title: 'Griller le granola', text: 'Mélangez les flocons d’avoine (30 g), les amandes concassées et une cuillère de miel. Faites griller à la poêle à feu moyen 5 minutes, en remuant, jusqu’à ce qu’ils dorent.', minutes: 6 },
      { title: 'Couper les fruits', text: 'Équeutez les fraises (80 g) et coupez-les en quartiers. Gardez quelques myrtilles entières pour la déco.', minutes: 3 },
      { title: 'Monter les couches', text: 'Dans le verre, déposez une couche de yaourt (150 g), puis des fraises et des myrtilles, puis du granola. Répétez une fois.', minutes: 2 },
      { title: 'Finir', text: 'Terminez par une couche de granola, des myrtilles entières et un filet de miel.', minutes: 1 },
    ],
    tips: ['Le granola doit refroidir avant d’être ajouté, sinon il ramollit le yaourt.', 'Pour de belles couches nettes, versez doucement, avec une cuillère posée contre le verre.', 'Vous pouvez préparer le granola en grande quantité : il se garde 2 semaines.'],
    serve: 'Dans un verre transparent, une cuillère longue et une serviette en lin.',
    storage: 'Le granola se garde 2 semaines dans un bocal fermé. Le parfait se mange dans l’heure.',
  },

  'tartine-ricotta-figues': {
    intro: 'Une tartine de ricotta crémeuse, de figues fraîches et de miel. Une recette méditerranéenne très simple, dont la couleur fait tout le charme.',
    equipment: ['Un grille-pain ou une poêle', 'Un couteau', 'Une cuillère'],
    prepMinutes: 5, cookMinutes: 3,
    steps: [
      { title: 'Griller', text: 'Grillez le pain (60 g) jusqu’à ce qu’il soit doré.', minutes: 3 },
      { title: 'Étaler la ricotta', text: 'Étalez la ricotta (40 g) généreusement, en gardant un relief avec le dos de la cuillère.', minutes: 1 },
      { title: 'Ajouter les figues', text: 'Coupez les figues en quartiers et disposez-les sur la ricotta.', minutes: 1 },
      { title: 'Miel', text: 'Arrosez de miel en filet, et servez aussitôt.', minutes: 1 },
    ],
    tips: ['Les figues doivent être bien mûres : elles sont plus sucrées.', 'Une pincée de poivre noir ou de fleur de sel relève le goût.', 'Une herbe fraîche (menthe, thym) donne de la couleur.'],
    serve: 'Sur une assiette blanche, avec un verre de lait ou un café.',
    storage: 'Se mange immédiatement.',
  },

  'overnight-oats-myrtilles': {
    intro: 'Les overnight oats se préparent la veille, dans un bocal : l’avoine absorbe le lait et le yaourt, et se mange froide le matin. Les myrtilles apportent la couleur.',
    equipment: ['Un bocal avec couvercle', 'Une cuillère'],
    prepMinutes: 5, cookMinutes: 0,
    steps: [
      { title: 'Mélanger', text: 'Dans le bocal, mélangez les flocons d’avoine (50 g), le lait (120 ml) et le yaourt (50 g).', minutes: 2 },
      { title: 'Reposer', text: 'Fermez le bocal et laissez-le au réfrigérateur toute une nuit.', minutes: 480 },
      { title: 'Garnir', text: 'Le matin, ajoutez les myrtilles (40 g) et le miel.', minutes: 2 },
      { title: 'Vérifier la texture', text: 'Si l’avoine est trop épaisse, ajoutez une cuillère de lait et remuez. Elle doit être crémeuse, pas sèche.', minutes: 1 },
    ],
    tips: ['Ajoutez une pincée de cannelle la veille pour parfumer.', 'Pour une texture plus souple, ajoutez un peu plus de lait.', 'Le bocal se transporte très bien au travail.'],
    serve: 'Froid, dans le bocal, avec quelques myrtilles en surface.',
    storage: 'Se garde 3 jours au réfrigérateur.',
  },

  'assiette-matin-mediterraneenne': {
    intro: 'Une assiette du matin façon « brunch méditerranéen » : labneh, légumes frais, olives, pain, œuf dur et za’atar. Elle est colorée, équilibrée, et se prépare en dix minutes.',
    equipment: ['Une grande assiette', 'Une casserole (pour l’œuf)', 'Un couteau'],
    prepMinutes: 10, cookMinutes: 9,
    steps: [
      { title: 'Cuire l’œuf', text: 'Faites cuire l’œuf 9 minutes dans l’eau bouillante. Plongez-le dans l’eau froide, écalez-le et coupez-le en deux.', minutes: 11 },
      { title: 'Couper les légumes', text: 'Coupez la tomate et le concombre en dés, et les olives en rondelles.', minutes: 4 },
      { title: 'Étaler la labneh', text: 'Étalez la labneh (60 g) dans un coin de l’assiette.', minutes: 1 },
      { title: 'Disposer', text: 'Disposez les légumes, les olives, l’œuf et le pain en groupes séparés, pour laisser de la place à la couleur.', minutes: 2 },
      { title: 'Finir', text: 'Arrosez d’huile d’olive et saupoudrez de za’atar.', minutes: 1 },
    ],
    tips: ['Disposez les éléments en groupes : l’assiette paraît plus soignée.', 'Le concombre doit être bien égoutté pour ne pas détremper la labneh.', 'Une fleur comestible ou quelques feuilles de menthe donnent un rendu « photo ».'],
    serve: 'Sur une assiette blanche, avec du pain et un thé à la menthe.',
    storage: 'À manger immédiatement. Les légumes se préparent la veille.',
  },
};
