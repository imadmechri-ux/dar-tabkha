import type { RecipeDetail } from './types';

export const RECIPES_BREAKFAST: Record<string, RecipeDetail> = {
  'pancakes-banane-avoine': {
    intro: 'Des petites galettes sans farine blanche, à la banane et aux flocons d’avoine. Elles sont moelleuses, sucrées naturellement, et bien adaptées avant l’effort.',
    equipment: ['Un mixeur ou un bol', 'Une poêle antiadhésive', 'Une spatule'],
    prepMinutes: 10, cookMinutes: 10,
    steps: [
      { title: 'Écraser la banane', text: 'Écrasez la banane à la fourchette dans un bol, jusqu’à obtenir une purée assez lisse.', minutes: 2 },
      { title: 'Ajouter l’œuf et le lait', text: 'Ajoutez l’œuf et le lait (100 ml) et mélangez bien.', minutes: 2 },
      { title: 'Mixer l’avoine', text: 'Mixez les flocons d’avoine (50 g) en farine grossière, puis ajoutez-les au mélange avec la cannelle. Laissez reposer 5 minutes : la pâte épaissit.', minutes: 6 },
      { title: 'Cuire', text: 'Chauffez la poêle avec une goutte d’huile à feu moyen-doux. Versez une petite louche de pâte. Quand des bulles apparaissent en surface, retournez la galette et cuisez encore 1 minute.', minutes: 8 },
      { title: 'Servir', text: 'Empilez les galettes et servez tièdes avec des fruits.', minutes: 1 },
    ],
    tips: ['Un feu trop vif brûle l’extérieur et laisse le centre cru.', 'Si la pâte est trop épaisse, ajoutez une cuillère de lait.', 'Les galettes se congèlent et se réchauffent au grille-pain.'],
    serve: 'Avec des fruits frais, un filet de miel ou du yaourt.',
    storage: 'Se garde 2 jours au frais. Réchauffez à la poêle ou au grille-pain.',
  },

  'pain-perdu-cannelle': {
    intro: 'Le pain perdu est un classique du petit-déjeuner : du pain rassis trempé dans un mélange œuf-lait, puis doré au beurre. La cannelle et le miel le rendent gourmand.',
    equipment: ['Un bol creux', 'Une poêle', 'Une spatule'],
    prepMinutes: 5, cookMinutes: 10,
    steps: [
      { title: 'Préparer le mélange', text: 'Battez l’œuf avec le lait (60 ml) et la cannelle (une demi-cuillère à café) dans le bol.', minutes: 2 },
      { title: 'Tremper', text: 'Trempez les tranches de pain (60 g) 20 secondes de chaque côté. Elles doivent s’imbiber sans se défaire.', minutes: 2 },
      { title: 'Dorer', text: 'Faites fondre le beurre (5 g) dans la poêle à feu moyen. Posez les tranches et faites-les dorer 2 à 3 minutes par face.', minutes: 6 },
      { title: 'Servir', text: 'Arrosez de miel et servez chaud.', minutes: 1 },
    ],
    tips: ['Du pain rassis absorbe mieux le mélange, un pain trop frais se défait.', 'Ne le faites pas cuire trop fort : le centre doit rester moelleux.', 'Ajoutez un peu de fruits rouges pour un goût plus frais.'],
    serve: 'Avec du miel, des fruits ou du yaourt.',
    storage: 'Se mange immédiatement. Il se réchauffe mal.',
  },

  'avocat-toast-oeuf': {
    intro: 'Un toast à l’avocat écrasé, au citron, avec un œuf dessus. Simple, riche en bons lipides et en protéines, et très rapide à préparer.',
    equipment: ['Un grille-pain ou une poêle', 'Une fourchette', 'Une petite casserole (pour l’œuf poché)'],
    prepMinutes: 5, cookMinutes: 5,
    steps: [
      { title: 'Griller le pain', text: 'Grillez le pain (60 g) jusqu’à ce qu’il soit croustillant.', minutes: 2 },
      { title: 'Écraser l’avocat', text: 'Écrasez la moitié de l’avocat à la fourchette avec le jus du quart de citron, une pincée de sel et de poivre.', minutes: 2 },
      { title: 'Cuire l’œuf', text: 'Pochez l’œuf 3 à 4 minutes dans l’eau frémissante, ou faites-le au plat à feu doux.', minutes: 4 },
      { title: 'Assembler', text: 'Étalez l’avocat sur le pain, posez l’œuf dessus et ajoutez un peu de piment si vous aimez.', minutes: 1 },
    ],
    tips: ['Un avocat bien mûr s’écrase facilement ; un avocat dur ne s’écrase pas.', 'Pour un œuf poché parfait, cassez-le d’abord dans une petite tasse.', 'Le citron empêche l’avocat de brunir.'],
    serve: 'Avec une pincée de piment et un filet d’huile d’olive.',
    storage: 'Se mange immédiatement. L’avocat écrasé brunit en quelques heures.',
  },

  'chia-pudding': {
    intro: 'Le pudding de chia est une préparation qui se fait la veille. Les graines gonflent dans le lait et forment une crème légère, riche en fibres et en oméga-3.',
    equipment: ['Un bocal ou un bol avec couvercle', 'Une cuillère'],
    prepMinutes: 5, cookMinutes: 0,
    steps: [
      { title: 'Mélanger', text: 'Dans le bocal, mélangez les graines de chia (20 g) avec le lait (150 ml) et le miel.', minutes: 2 },
      { title: 'Remuer', text: 'Remuez bien, puis remuez à nouveau après 5 minutes pour éviter les grumeaux.', minutes: 5 },
      { title: 'Laisser gonfler', text: 'Fermez le bocal et laissez-le au réfrigérateur au moins 2 heures, idéalement toute une nuit.', minutes: 120 },
      { title: 'Garnir', text: 'Coupez la banane en rondelles et disposez-les sur le pudding avant de servir.', minutes: 2 },
    ],
    tips: ['Les graines doivent être bien mélangées dès le début, sinon elles font des grumeaux.', 'Pour une version plus crémeuse, remplacez une partie du lait par du yaourt.', 'Le pudding se garde 3 jours au frais.'],
    serve: 'Froid, avec des fruits, des noix ou des flocons d’avoine.',
    storage: 'Se garde 3 jours au réfrigérateur, dans un bocal fermé.',
  },

  menemen: {
    intro: 'Le menemen est un plat turc de la cuisine du matin : des œufs brouillés dans une sauce tomate, poivron et piment. Il ressemble à la hergma tunisienne, mais se prépare comme un brouillé.',
    equipment: ['Une poêle antiadhésive', 'Une spatule en bois', 'Un couteau'],
    prepMinutes: 5, cookMinutes: 10,
    steps: [
      { title: 'Faire revenir', text: 'Faites revenir l’oignon et le poivron émincés dans l’huile d’olive, 4 minutes à feu moyen.', minutes: 4 },
      { title: 'Ajouter la tomate', text: 'Ajoutez la tomate en dés et le piment haché. Laissez cuire 3 minutes, jusqu’à ce que la tomate fonde.', minutes: 3 },
      { title: 'Battre les œufs', text: 'Battez les œufs (2) avec une pincée de sel et de poivre dans un bol.', minutes: 1 },
      { title: 'Brouiller', text: 'Versez les œufs dans la poêle et remuez doucement avec la spatule, à feu doux, jusqu’à ce qu’ils soient juste pris mais encore moelleux.', minutes: 2 },
      { title: 'Servir', text: 'Servez aussitôt, dans la poêle, avec du pain.', minutes: 1 },
    ],
    tips: ['Ne laissez pas les œufs trop cuire : ils doivent rester crémeux.', 'Le menemen se mange chaud : il se défait en refroidissant.', 'Pour un goût plus fumé, ajoutez une pincée de paprika fumé.'],
    serve: 'Avec du pain frais, du fromage blanc ou du thé.',
    storage: 'Se mange immédiatement. Il se réchauffe mal.',
  },

  'msemen-simple': {
    intro: 'Le msemen est une crêpe marocaine feuilletée, pliée avec du beurre et cuite à la poêle. C’est un petit-déjeuner ou un goûter très apprécié, qui se mange chaud.',
    equipment: ['Un saladier', 'Une poêle plate ou une plaque', 'Un papier cuisson', 'Un rouleau ou une bouteille'],
    prepMinutes: 20, cookMinutes: 15,
    steps: [
      { title: 'Pétrir la pâte', text: 'Mélangez la farine (100 g), le sel et l’huile. Ajoutez de l’eau tiède petit à petit, en pétrissant jusqu’à une pâte souple et lisse.', minutes: 8 },
      { title: 'Reposer', text: 'Formez une boule, couvrez et laissez reposer 20 minutes.', minutes: 20 },
      { title: 'Étaler et plier', text: 'Divisez la pâte en petites boules. Aplatissez une boule en disque très fin, badigeonnez de beurre fondu, puis pliez en carré.', minutes: 5 },
      { title: 'Cuire', text: 'Aplatissez le carré à nouveau. Cuisez à la poêle sèche à feu moyen, 2 minutes par face, jusqu’à ce qu’il soit doré et feuilleté.', minutes: 10 },
    ],
    tips: ['Plus la pâte est étirée finement, plus les feuilletages sont nombreux.', 'Le beurre doit être bien fondu pour bien pénétrer la pâte.', 'Servez-le tout de suite : il durcit en refroidissant.'],
    serve: 'Avec du miel, de la confiture ou du fromage frais.',
    storage: 'Se garde 1 jour, emballé. Se réchauffe à la poêle.',
  },

  'bowl-yaourt-fruits': {
    intro: 'Un bol de yaourt nature, de flocons d’avoine, de banane et d’amandes. C’est un petit-déjeuner ou un goûter équilibré, qui se prépare en quelques minutes.',
    equipment: ['Un bol', 'Une cuillère', 'Un petit couteau'],
    prepMinutes: 5, cookMinutes: 0,
    steps: [
      { title: 'Verser le yaourt', text: 'Versez le yaourt nature (150 g) dans un bol.', minutes: 1 },
      { title: 'Ajouter l’avoine', text: 'Ajoutez les flocons d’avoine (30 g) et mélangez légèrement.', minutes: 1 },
      { title: 'Ajouter la banane', text: 'Coupez la banane en rondelles et disposez-les sur le dessus.', minutes: 2 },
      { title: 'Garnir', text: 'Concassez les amandes (10 g) et parsemez-les. Ajoutez le miel en filet.', minutes: 1 },
    ],
    tips: ['Laissez l’avoine tremper 10 minutes dans le yaourt pour un résultat plus tendre.', 'Le yaourt grec donne plus de protéines.', 'Vous pouvez remplacer la banane par des fruits rouges.'],
    serve: 'Froid, à la cuillère.',
    storage: 'Se mange le jour même. Le bol se prépare la veille, sans la banane.',
  },
};
