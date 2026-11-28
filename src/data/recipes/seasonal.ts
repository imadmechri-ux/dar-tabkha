import type { RecipeDetail } from './types';

export const RECIPES_SEASONAL: Record<string, RecipeDetail> = {
  'veloute-courge-carotte': {
    intro: 'Un velouté doux et chaud, préparé avec la courge de saison, la carotte et une pointe de cumin. Il réchauffe en automne et en hiver, et se prépare avec peu d’ingrédients.',
    equipment: ['Une casserole à fond épais', 'Un mixeur plongeant', 'Un couteau'],
    prepMinutes: 15, cookMinutes: 25,
    steps: [
      { title: 'Préparer les légumes', text: 'Épluchez la courge (150 g) et coupez-la en cubes de 2 cm. Épluchez et coupez en rondelles la carotte, l’oignon et l’ail.', minutes: 8 },
      { title: 'Faire revenir', text: 'Dans la casserole, faites revenir l’oignon et la carotte dans une cuillère d’huile 5 minutes à feu doux. Ajoutez l’ail 1 minute.', minutes: 6 },
      { title: 'Cuire la courge', text: 'Ajoutez la courge, le cumin et le bouillon (350 ml). Portez à frémissement et cuisez 20 minutes, jusqu’à ce que la courge s’écrase facilement.', minutes: 20 },
      { title: 'Mixer', text: 'Hors du feu, mixez jusqu’à obtenir une texture lisse. Ajoutez de l’eau si le velouté est trop épais.', minutes: 2 },
      { title: 'Finir', text: 'Rectifiez le sel et le poivre, et ajoutez un filet d’huile d’olive crue avant de servir.', minutes: 1 },
    ],
    tips: ['Une courge butternut donne une texture plus sucrée et moins fibreuse.', 'Pour une version plus riche, ajoutez une cuillère de crème ou de lait de coco.', 'Le velouté s’épaissit en refroidissant : diluez au réchauffage.'],
    serve: 'Dans un bol creux, avec une graine grillée ou un filet d’huile d’olive.',
    storage: 'Se garde 3 jours au frais. Se congèle très bien.',
  },

  'gratin-courge-ricotta': {
    intro: 'Un gratin italien de courge et de ricotta, avec du parmesan doré au four. La courge rôtie devient fondante et sucrée, et la ricotta apporte une note crémeuse.',
    equipment: ['Un plat à gratin', 'Un couteau', 'Un bol', 'Une plaque de cuisson'],
    prepMinutes: 15, cookMinutes: 35,
    steps: [
      { title: 'Cuire la courge', text: 'Coupez la courge (150 g) en tranches de 5 mm. Disposez-les sur une plaque, arrosez d’huile et enfournez à 200 °C pendant 15 minutes, jusqu’à ce qu’elles soient tendres.', minutes: 17 },
      { title: 'Préparer la ricotta', text: 'Dans un bol, mélangez la ricotta (50 g), la moitié du parmesan râpé (7 g) et l’ail écrasé, avec une pincée de sel et de poivre.', minutes: 3 },
      { title: 'Monter le gratin', text: 'Dans le plat, alternez des couches de courge et de ricotta. Terminez par le reste de parmesan.', minutes: 4 },
      { title: 'Gratiner', text: 'Enfournez à 190 °C pendant 15 minutes, jusqu’à ce que le dessus soit doré.', minutes: 15 },
      { title: 'Reposer', text: 'Laissez reposer 5 minutes avant de servir, pour que le gratin tienne.', minutes: 5 },
    ],
    tips: ['Une fine tranche de courge bien cuite se coupe mieux qu’une tranche crue.', 'Ajoutez une pincée de muscade pour un goût plus chaud.', 'Vous pouvez remplacer la courge par des tranches de potiron.'],
    serve: 'Tiède, avec une salade verte.',
    storage: 'Se garde 3 jours au frais. Réchauffez au four à 180 °C.',
  },

  'poireaux-pois-chiches': {
    intro: 'Des poireaux fondants mijotés avec des pois chiches, de la tomate et du cumin. Un plat végétal simple, de saison, qui se mange chaud ou tiède.',
    equipment: ['Une sauteuse avec couvercle', 'Un couteau', 'Une passoire'],
    prepMinutes: 10, cookMinutes: 20,
    steps: [
      { title: 'Laver le poireau', text: 'Coupez le poireau en rondelles de 1 cm, en les lavant bien entre les couches où la terre s’accumule.', minutes: 5 },
      { title: 'Faire revenir', text: 'Dans la sauteuse, faites revenir les poireaux dans l’huile 6 minutes à feu doux, avec l’ail écrasé.', minutes: 6 },
      { title: 'Ajouter', text: 'Ajoutez les pois chiches égouttés, la tomate en dés, le cumin et une pincée de sel. Remuez 1 minute.', minutes: 2 },
      { title: 'Mijoter', text: 'Couvrez et laissez mijoter 12 minutes à feu doux, jusqu’à ce que les poireaux soient fondants.', minutes: 12 },
      { title: 'Finir', text: 'Hors du feu, ajoutez le jus du quart de citron et un filet d’huile.', minutes: 1 },
    ],
    tips: ['Les poireaux doivent être bien lavés : la terre reste souvent entre les feuilles.', 'Le citron se met hors du feu pour garder son parfum.', 'Ajoutez du persil haché pour la couleur.'],
    serve: 'Tiède, en plat végétal, avec du pain.',
    storage: 'Se garde 3 jours au frais. Il est meilleur réchauffé.',
  },

  'salade-orange-dattes': {
    intro: 'Une salade d’oranges de saison, de dattes et de cannelle : fraîche, sucrée et parfumée. C’est un classique des tables tunisiennes en hiver, servi en dessert ou au goûter.',
    equipment: ['Un couteau bien aiguisé', 'Une planche', 'Un plat creux'],
    prepMinutes: 10, cookMinutes: 0,
    steps: [
      { title: 'Peler les oranges', text: 'Pelez les oranges (2) à vif, en retirant la peau blanche avec le couteau. Coupez-les en rondelles de 5 mm, en gardant le jus qui s’écoule.', minutes: 5 },
      { title: 'Couper les dattes', text: 'Dénoyautez les dattes (40 g) et coupez-les en fines lamelles.', minutes: 3 },
      { title: 'Assembler', text: 'Disposez les rondelles d’orange dans le plat, en les chevauchant légèrement, puis semez les dattes dessus.', minutes: 2 },
      { title: 'Assaisonner', text: 'Arrosez d’huile d’olive et de jus d’orange, saupoudrez de cannelle. Ajoutez les amandes concassées si vous en mettez.', minutes: 1 },
      { title: 'Reposer', text: 'Laissez reposer 10 minutes au frais avant de servir, pour que les saveurs se mêlent.', minutes: 10 },
    ],
    tips: ['Choisissez des oranges bien parfumées ; l’orange de Tunisie est idéale en hiver.', 'La cannelle se met au dernier moment, pour garder son parfum.', 'Ajoutez quelques feuilles de menthe pour la fraîcheur.'],
    serve: 'Froid, en dessert, ou en collation avec un thé.',
    storage: 'Se garde 1 jour au frais. Les oranges rendent du jus : mélangez avant de servir.',
  },

  'pates-blettes-ricotta': {
    intro: 'Des pâtes aux blettes fondantes et à la ricotta, un plat italien de saison très simple. Les blettes apportent du goût et les tiges peuvent se réserver pour un autre plat.',
    equipment: ['Une grande casserole', 'Une poêle', 'Un couteau', 'Une passoire'],
    prepMinutes: 10, cookMinutes: 15,
    steps: [
      { title: 'Préparer les blettes', text: 'Séparez les feuilles des tiges. Hachez les feuilles (150 g) grossièrement, et réservez les tiges pour une autre recette.', minutes: 5 },
      { title: 'Cuire les pâtes', text: 'Faites cuire les pâtes (90 g) dans l’eau bouillante salée. Gardez une tasse d’eau de cuisson avant d’égoutter.', minutes: 10 },
      { title: 'Faire tomber les blettes', text: 'Dans la poêle, faites chauffer l’huile avec l’ail écrasé. Ajoutez les feuilles de blettes et laissez-les tomber 4 à 5 minutes, à feu moyen, jusqu’à ce qu’elles soient fondantes.', minutes: 5 },
      { title: 'Lier', text: 'Ajoutez les pâtes dans la poêle avec deux cuillères d’eau de cuisson. Remuez 1 minute.', minutes: 1 },
      { title: 'Finir', text: 'Hors du feu, ajoutez la ricotta (40 g) et le parmesan râpé (15 g), et mélangez doucement pour une sauce crémeuse.', minutes: 1 },
    ],
    tips: ['Les blettes doivent être bien égouttées après lavage, sinon la sauce est aqueuse.', 'La ricotta se met hors du feu, pour qu’elle ne tourne pas.', 'Une pincée de piment ajoute du relief.'],
    serve: 'Avec du parmesan râpé et un filet d’huile d’olive.',
    storage: 'Se garde 2 jours au frais. Réchauffez doucement avec un peu d’eau.',
  },
};
