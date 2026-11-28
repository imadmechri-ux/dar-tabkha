import type { RecipeDetail } from './types';

export const RECIPES_TUNISIEN: Record<string, RecipeDetail> = {
  lablabi: {
    intro: 'Soupe de pois chiches typique des matins tunisiens, servie avec du pain rassis trempé dans le bouillon. Le cumin et l’ail donnent le caractère, le citron et la harissa finissent le plat.',
    equipment: ['Un mixeur ou un pilon', 'Une casserole', 'Un bol creux'],
    prepMinutes: 10,
    cookMinutes: 15,
    steps: [
      { title: 'Préparer les pois chiches', text: 'Égouttez les pois chiches cuits (environ 80 g par personne) et rincez-les. Réchauffez-les dans une casserole avec 250 ml de bouillon chaud à feu moyen, 5 minutes.', minutes: 5 },
      { title: 'Mixer l’ail et le cumin', text: 'Écrasez 1 gousse d’ail avec 1 cuillère à café de cumin et une pincée de sel. Ajoutez une cuillère à soupe d’huile d’olive pour obtenir une pâte lisse.', minutes: 2 },
      { title: 'Émietter le pain', text: 'Coupez ou émiettez 60 g de pain rassis en morceaux de la taille d’une noix. Si le pain est frais, faites-le légèrement sécher au four 5 minutes à 150 °C.', minutes: 3 },
      { title: 'Assembler', text: 'Dans un bol, disposez le pain, puis versez les pois chiches et leur bouillon. Ajoutez la pâte d’ail et de cumin, puis une cuillère à café de harissa si vous aimez le piment.', minutes: 2 },
      { title: 'Finir', text: 'Arrosez d’un filet d’huile d’olive et de quelques gouttes de jus de citron. Servez immédiatement, le pain doit rester un peu ferme.' },
    ],
    tips: [
      'Le pain doit tenir à l’intérieur : ajoutez le bouillon juste avant de servir, sinon il ramollit complètement.',
      'Pour une version plus complète, ajoutez un œuf poché ou une cuillère de thon.',
      'Les pois chiches en conserve gagnent à être rincés, ce qui réduit le goût métallique.',
    ],
    serve: 'Servi chaud, dans un bol profond, avec du citron à part et de la harissa.',
    storage: 'Se conserve mal une fois le pain imbibé. Préparez les pois chiches et le bouillon à l’avance, et montez le bol au dernier moment.',
  },

  'ojja-merguez': {
    intro: 'Ojja : une sauce tomate-poivron relevée à la harissa, où l’on fait pocher des œufs et des merguez. C’est un plat de famille rapide et généreux, servi directement dans le plat de cuisson.',
    equipment: ['Une poêle profonde avec couvercle', 'Un couteau', 'Une cuillère en bois'],
    prepMinutes: 10,
    cookMinutes: 25,
    steps: [
      { title: 'Préparer les légumes', text: 'Émincez finement l’oignon (une demi-pièce par personne) et coupez le demi-poivron en fines lanières. Hachez une gousse d’ail.', minutes: 5 },
      { title: 'Faire revenir', text: 'Chauffez une cuillère à soupe d’huile d’olive à feu moyen. Faites revenir l’oignon 4 à 5 minutes jusqu’à ce qu’il devienne translucide, puis ajoutez le poivron et l’ail. Laissez encore 3 minutes.', minutes: 8 },
      { title: 'Monter la sauce', text: 'Ajoutez une cuillère à soupe de concentré de tomate et une cuillère à café de harissa. Remuez 1 minute, puis ajoutez 150 g de tomates coupées en dés et un peu de sel.', minutes: 3 },
      { title: 'Mijoter', text: 'Laissez la sauce cuire à feu doux 10 minutes, en remuant de temps en temps. Elle doit être épaisse et brillante d’huile ; si elle sèche, ajoutez deux cuillères d’eau.', minutes: 10 },
      { title: 'Cuire les merguez', text: 'Coupez les merguez (100 g) en tronçons de 3 cm et faites-les dorer dans la sauce 5 minutes. Piquez-les pour que la graisse s’échappe.', minutes: 5 },
      { title: 'Pocher les œufs', text: 'Faites deux petits creux dans la sauce, cassez-y l’œuf (un par personne) sans casser le jaune, salez le blanc, couvrez et laissez cuire 4 à 5 minutes, jusqu’à ce que le blanc soit pris et le jaune encore coulant.', minutes: 5 },
    ],
    tips: [
      'La harissa commerciale varie beaucoup en force : commencez par une cuillère à café, puis ajustez.',
      'Ne couvrez pas la sauce pendant la réduction, sinon elle devient aqueuse.',
      'Pour une ojja plus légère, remplacez les merguez par du poulet, et ajoutez-le en même temps que les tomates.',
    ],
    serve: 'Servie dans la poêle, avec du pain tunisien (khobz) pour saucer, et une salade de carottes-citron à côté.',
    storage: 'Les merguez et la sauce se conservent 2 jours au frais. Réchauffez à feu doux sans faire bouillir fort, et pochez les œufs au dernier moment.',
  },

  chakchouka: {
    intro: 'La chakchouka est une préparation de poivrons, tomates et œufs, mijotée dans une même poêle. Elle est très répandue en Tunisie pour le petit-déjeuner, le déjeuner ou le dîner léger.',
    equipment: ['Une grande poêle avec couvercle', 'Un couteau et une planche'],
    prepMinutes: 10,
    cookMinutes: 20,
    steps: [
      { title: 'Couper les légumes', text: 'Émincez l’oignon et le poivron. Coupez les tomates (200 g) en petits dés. Écrasez l’ail.', minutes: 5 },
      { title: 'Faire fondre', text: 'Chauffez deux cuillères à soupe d’huile d’olive à feu moyen-doux. Faites fondre l’oignon et le poivron 8 minutes, en remuant, jusqu’à ce qu’ils soient tendres mais pas colorés.', minutes: 8 },
      { title: 'Ajouter les épices', text: 'Ajoutez l’ail et le cumin (une demi-cuillère à café), puis la harissa (une cuillère à café). Laissez parfumer 1 minute.', minutes: 1 },
      { title: 'Mijoter la sauce', text: 'Ajoutez les tomates et une pincée de sel. Laissez mijoter à découvert 10 minutes, jusqu’à ce que la sauce soit épaisse.', minutes: 10 },
      { title: 'Pocher les œufs', text: 'Faites deux creux dans la sauce avec le dos d’une cuillère, cassez un œuf dans chacun, couvrez et laissez cuire 5 minutes à feu doux. Le blanc doit être pris, le jaune encore souple.', minutes: 5 },
      { title: 'Servir', text: 'Parsemez de persil haché et servez tout de suite, dans la poêle.', minutes: 1 },
    ],
    tips: [
      'Ne mélangez pas les œufs à la sauce : on les laisse dans des puits pour garder le jaune coulant.',
      'Pour une sauce plus douce, retirez les graines du piment et utilisez seulement le paprika fumé.',
      'Vous pouvez ajouter une pomme de terre coupée en cubes et cuite à part pour un plat plus nourrissant.',
    ],
    serve: 'Accompagnée de pain croustillant, de fromage frais ou de feta, et d’olives.',
    storage: 'La sauce seule se garde 2 jours au frais. Les œufs se font au moment de manger.',
  },

  'brik-oeuf': {
    intro: 'Le brik est un feuilleté tunisien fin et croustillant, enveloppant un œuf encore coulant. Il se mange à la main, souvent avec du citron.',
    equipment: ['Une poêle à frire ou une petite friteuse', 'Un papier absorbant', 'Un pinceau ou une cuillère'],
    prepMinutes: 10,
    cookMinutes: 8,
    steps: [
      { title: 'Préparer la feuille', text: 'Il faut une feuille de brick (ou, à défaut, une feuille de pâte filo). Posez-la à plat sur le plan de travail. Ajoutez une cuillère à café de farine délayée dans un peu d’eau si la feuille est trop souple.', minutes: 2 },
      { title: 'Garnir', text: 'Au centre, déposez une cuillère de persil haché, un peu de thon égoutté si vous en mettez, et une pincée de sel. Faites un creux au centre pour y casser l’œuf sans qu’il s’étale.', minutes: 2 },
      { title: 'Casser l’œuf', text: 'Cassez un œuf (un par brik) doucement dans le creux. Il doit rester entier.', minutes: 1 },
      { title: 'Plier', text: 'Repliez un côté sur l’œuf, puis plier en triangle, comme une chaussette. Scellez les bords avec la farine délayée ou un peu de jaune d’œuf.', minutes: 2 },
      { title: 'Frire', text: 'Versez l’huile dans la poêle sur environ 1 cm, à feu moyen-vif. Quand elle grésille au contact d’un petit morceau de pâte, glissez le brik. Faites dorer 1 à 2 minutes par face, en le retournant avec précaution.', minutes: 4 },
      { title: 'Égoutter', text: 'Posez le brik sur du papier absorbant 30 secondes avant de servir. Le jaune doit rester coulant : si vous doutez, coupez-le au milieu et regardez.', minutes: 1 },
    ],
    tips: [
      'Le brik doit être frit juste ce qu’il faut : trop longtemps, l’œuf cuit entièrement.',
      'Mettez l’œuf au frais juste avant de le casser, il sera plus facile à manipuler.',
      'La feuille de brick se déchire vite : travaillez avec un linge humide posé dessus pour qu’elle ne sèche pas.',
    ],
    serve: 'Servi aussitôt avec un quartier de citron et une salade mechouia ou une salade verte.',
    storage: 'Le brik se mange immédiatement ; réchauffé, il perd son croustillant et l’œuf cuit complètement.',
  },

  'mloukhia-simple': {
    intro: 'La mloukhia est un plat national tunisien, à base de feuilles de corète potagère (mloukhia) mijotées avec de la viande. Cette version utilise des épinards, plus faciles à trouver : c’est un remplacement, pas la recette traditionnelle.',
    equipment: ['Une grande casserole à fond épais', 'Un couteau', 'Un mixeur ou un hachoir (pour les épinards)'],
    prepMinutes: 15,
    cookMinutes: 45,
    steps: [
      { title: 'Saisir la viande', text: 'Coupez l’agneau (100 g par personne) en morceaux de 3 cm. Faites-le dorer dans deux cuillères à soupe d’huile d’olive à feu moyen-vif, 5 minutes, en le retournant.', minutes: 5 },
      { title: 'Faire revenir l’oignon', text: 'Ajoutez l’oignon émincé et laissez-le fondre 5 minutes. Ajoutez deux gousses d’ail écrasées et le concentré de tomate, puis remuez 2 minutes.', minutes: 7 },
      { title: 'Mijoter', text: 'Versez 300 ml de bouillon et un peu d’eau pour couvrir la viande. Portez à ébullition, baissez le feu et laissez mijoter à couvert 30 minutes, jusqu’à ce que la viande soit tendre.', minutes: 30 },
      { title: 'Préparer les épinards', text: 'Pendant ce temps, lavez les épinards (120 g) et hachez-les finement au couteau ou au mixeur, sans les réduire en purée.', minutes: 5 },
      { title: 'Ajouter les épinards', text: 'Ajoutez les épinards hachés dans la casserole, remuez, et laissez cuire à découvert 10 minutes pour que le liquide réduise et que la sauce s’épaississe.', minutes: 10 },
      { title: 'Finir au citron', text: 'Hors du feu, ajoutez le jus d’un demi-citron, rectifiez le sel et servez.', minutes: 1 },
    ],
    tips: [
      'La vraie mloukhia se prépare avec des feuilles séchées de corète potagère, que vous trouverez dans les épiceries tunisiennes ou orientales.',
      'Les épinards doivent cuire peu de temps : trop longtemps, ils perdent leur couleur et deviennent amers.',
      'Ajoutez un peu de harissa à table plutôt que dans la casserole pour garder le goût du légume.',
    ],
    serve: 'Traditionnellement servie avec de la semoule ou du pain tunisien, et des quartiers de citron.',
    storage: 'Se conserve 3 jours au réfrigérateur et se réchauffe très bien, la sauce même s’épaissit un peu.',
  },

  'slata-mechouia': {
    intro: 'La slata mechouia est une salade grillée emblématique de la cuisine tunisienne : poivrons, tomates et piment rôtis au four ou au feu, pelés et assaisonnés à l’ail et à l’huile. Elle se mange froide, en entrée ou en accompagnement.',
    equipment: ['Une plaque de cuisson ou une poêle à feu vif', 'Des pinces', 'Un saladier', 'Un bol de glace ou un film plastique (pour faire suer les poivrons)'],
    prepMinutes: 15,
    cookMinutes: 15,
    steps: [
      { title: 'Griller les légumes', text: 'Placez le poivron, la tomate et le piment directement sous le gril du four, très chaud, ou sur une plaque. Retournez-les toutes les 2 à 3 minutes, jusqu’à ce que la peau noircisse partout.', minutes: 12 },
      { title: 'Faire suer', text: 'Enfermez les légumes chauds dans un sac ou un saladier couvert d’un film pendant 5 minutes. La vapeur décolle la peau.', minutes: 5 },
      { title: 'Peler et épépiner', text: 'Retirez la peau noircie avec les doigts ou un couteau, sans passer les légumes sous l’eau (cela leur enlève du goût). Ouvrez le poivron, retirez les graines et les membranes.', minutes: 5 },
      { title: 'Couper', text: 'Coupez le poivron en lanières, la tomate en morceaux et hachez finement le piment. Égouttez l’excédent de jus.', minutes: 3 },
      { title: 'Assaisonner', text: 'Dans le saladier, mélangez une gousse d’ail écrasée, une cuillère à soupe d’huile d’olive, le jus d’un demi-citron, une pincée de sel et de poivre.', minutes: 2 },
      { title: 'Reposer', text: 'Ajoutez les légumes, mélangez, et laissez reposer 15 minutes au frais avant de servir.', minutes: 15 },
    ],
    tips: [
      'Ne lavez pas les légumes après les avoir grillés : l’eau dilue la saveur fumée.',
      'Pour un goût plus doux, retirez les graines du piment.',
      'Ajoutez un thon émietté et quelques olives pour un plat complet.',
    ],
    serve: 'En entrée ou en accompagnement, avec du pain et du thon. Servie froide, bien relevée au citron.',
    storage: 'Se conserve 2 jours au réfrigérateur, dans un bocal couvert d’huile.',
  },

  'couscous-poisson': {
    intro: 'Le couscous au poisson est un plat du littoral tunisien. Ici, une version rapide avec des sardines : la semoule est cuite à la vapeur, et la sauce tomate-harissa avec les légumes est versée dessus.',
    equipment: ['Un couscoussier ou une passoire et une casserole', 'Une grande poêle ou une cocotte', 'Un plat de service'],
    prepMinutes: 15,
    cookMinutes: 35,
    steps: [
      { title: 'Humidifier la semoule', text: 'Versez la semoule (100 g) dans un bol, ajoutez une cuillère à café de sel et une cuillère à soupe d’huile d’olive. Ajoutez de l’eau froide petit à petit, en grenant entre les doigts, jusqu’à ce qu’elle soit humide sans être collante. Laissez gonfler 10 minutes.', minutes: 10 },
      { title: 'Cuire la sauce', text: 'Dans une cocotte, faites revenir l’oignon et les carottes en rondelles 5 minutes dans l’huile. Ajoutez la tomate en dés, la harissa (une cuillère à café) et 300 ml d’eau. Laissez mijoter 15 minutes.', minutes: 20 },
      { title: 'Cuire la semoule à la vapeur', text: 'Déposez la semoule dans le couscoussier au-dessus de la sauce qui bout, ou dans une passoire posée sur une casserole d’eau frémissante. Couvrez 15 minutes, puis égrenez-la avec une fourchette et humidifiez-la légèrement.', minutes: 15 },
      { title: 'Ajouter le poisson', text: 'Nettoyez les sardines (120 g), retirez la tête et les entrailles, et déposez-les délicatement dans la sauce. Cuisez 8 à 10 minutes à feu doux, sans les remuer.', minutes: 10 },
      { title: 'Servir', text: 'Disposez la semoule dans un plat, versez la sauce et les légumes par-dessus, et posez les sardines au centre. Ajoutez les pois chiches si vous en utilisez, et servez chaud.', minutes: 2 },
    ],
    tips: [
      'La semoule doit être humidifiée deux fois, puis vaporisée : c’est ce qui la rend légère.',
      'Pour un goût plus marin, ajoutez un peu de fenouil ou de céleri dans la sauce.',
      'Si vous n’avez pas de couscoussier, une passoire fine posée sur la casserole fonctionne bien, avec un linge pour fermer le passage de la vapeur.',
    ],
    serve: 'Dans un grand plat commun, avec un quartier de citron et de la harissa à part.',
    storage: 'La semoule se réchauffe à la vapeur ou au micro-ondes avec un peu d’eau. Le poisson se garde 1 jour au frais.',
  },

  bsisa: {
    intro: 'La bsissa est une préparation traditionnelle à base de farine d’orge ou de blé grillée, parfumée au cumin. Elle se prépare en quelques minutes et se consomme comme collation ou petit-déjeuner.',
    equipment: ['Une poêle sèche', 'Un bol', 'Une cuillère'],
    prepMinutes: 5,
    cookMinutes: 5,
    steps: [
      { title: 'Griller la farine', text: 'Faites chauffer une poêle sèche à feu moyen. Versez la farine (60 g) et remuez-la constamment pendant 3 à 4 minutes, jusqu’à ce qu’elle prenne une couleur beige et une odeur de noisette. Ne la laissez pas brûler.', minutes: 4 },
      { title: 'Parfumer', text: 'Hors du feu, ajoutez le cumin (une cuillère à café) et une pincée de sel. Mélangez bien.', minutes: 1 },
      { title: 'Lier', text: 'Versez l’huile d’olive (une cuillère à soupe) et mélangez avec les doigts jusqu’à obtenir un sable homogène. Si vous aimez, ajoutez un peu de lait tiède, une cuillère à la fois, pour une texture plus compacte.', minutes: 2 },
      { title: 'Servir', text: 'Mangez-la tout de suite, ou gardez-la en pot fermé.' },
    ],
    tips: [
      'La farine grillée doit être remuée sans arrêt : elle brûle très vite.',
      'Pour une version sucrée, ajoutez une cuillère de miel ou de sucre glace.',
      'C’est un bon plat pour le Ramadan, en sahour, car il tient au corps.',
    ],
    serve: 'Seule, ou avec un thé à la menthe. On peut aussi la servir avec des dattes.',
    storage: 'Se garde plusieurs jours dans un pot fermé, à l’abri de l’humidité.',
  },
};
