import type { RecipeDetail } from './types';

export const RECIPES_FUSION_SPORT: Record<string, RecipeDetail> = {
  'pates-harissa-citron': {
    intro: 'Une recette de fusion : les pâtes italiennes prennent la harissa tunisienne et le citron confit. La sauce est rapide, parfumée et tient bien au corps.',
    equipment: ['Une grande casserole', 'Une petite poêle ou un bol', 'Une passoire'],
    prepMinutes: 5,
    cookMinutes: 12,
    steps: [
      { title: 'Cuire les pâtes', text: 'Faites cuire les pâtes (90 g) dans l’eau bouillante salée, environ 1 minute de moins que le temps indiqué. Gardez une demi-tasse d’eau de cuisson.', minutes: 10 },
      { title: 'Préparer le citron confit', text: 'Retirez la pulpe du quart de citron confit et coupez la peau en fines lanières. Hachez-la finement.', minutes: 2 },
      { title: 'Faire infuser la harissa', text: 'Dans la poêle, chauffez deux cuillères à soupe d’huile d’olive à feu doux. Ajoutez l’ail écrasé et une cuillère à café de harissa, et faites chauffer 1 minute sans brûler.', minutes: 2 },
      { title: 'Lier', text: 'Ajoutez les pâtes égouttées, le citron confit, trois cuillères d’eau de cuisson, et remuez 1 minute pour enrober.', minutes: 1 },
      { title: 'Finir', text: 'Hors du feu, ajoutez le parmesan râpé si vous en utilisez, et servez avec un filet d’huile d’olive.', minutes: 1 },
    ],
    tips: [
      'Goûtez la harissa avant d’ajouter le sel : le citron confit est déjà salé.',
      'Pour une version plus douce, réduisez la harissa et ajoutez un peu de concentré de tomate.',
      'Le citron confit se trouve dans les épiceries orientales ou italiennes ; on le remplace par du zeste de citron avec une pincée de sel.',
    ],
    serve: 'Avec des câpres ou des olives noires pour un contraste salé.',
    storage: 'Se mange tout de suite. Réchauffé, il s’assèche : ajoutez un peu d’eau.',
  },

  'spaghetti-thon-harissa': {
    intro: 'Une rencontre entre le thon de Méditerranée, les câpres et la harissa : un plat de pâtes simple, relevé et très protéiné, idéal après l’effort.',
    equipment: ['Une grande casserole', 'Une poêle', 'Une fourchette'],
    prepMinutes: 5,
    cookMinutes: 10,
    steps: [
      { title: 'Cuire les pâtes', text: 'Faites cuire les spaghettis (90 g) dans l’eau bouillante salée. Gardez une demi-tasse d’eau de cuisson.', minutes: 10 },
      { title: 'Faire revenir', text: 'Dans la poêle, faites chauffer deux cuillères à soupe d’huile d’olive avec l’ail écrasé à feu doux, 1 minute.', minutes: 1 },
      { title: 'Ajouter la harissa', text: 'Ajoutez une cuillère à café de harissa et les câpres (une cuillère à soupe, rincées), et laissez parfumer 1 minute.', minutes: 1 },
      { title: 'Ajouter le thon', text: 'Ajoutez le thon (80 g, égoutté et émietté). Faites-le chauffer 2 minutes à feu moyen, en le remuant doucement.', minutes: 2 },
      { title: 'Lier', text: 'Ajoutez les pâtes, deux cuillères d’eau de cuisson et remuez 1 minute. Servez avec du persil haché.', minutes: 2 },
    ],
    tips: [
      'Le thon doit rester moelleux : ne le faites pas trop cuire.',
      'Si vous avez du citron, ajoutez quelques gouttes en fin de cuisson.',
      'Le plat est bon froid, en salade, le lendemain.',
    ],
    serve: 'Chaud, ou tiède en salade avec des tomates cerises.',
    storage: 'Se garde 1 jour au frais. Réchauffez avec un peu d’eau.',
  },

  'ojja-pecorino': {
    intro: 'Une ojja tunisienne à la sauce tomate-harissa, avec des merguez, finie avec un œuf et du pecorino râpé. Le fromage fond légèrement sur l’œuf chaud.',
    equipment: ['Une poêle profonde avec couvercle', 'Une râpe', 'Une cuillère en bois'],
    prepMinutes: 10,
    cookMinutes: 20,
    steps: [
      { title: 'Préparer les légumes', text: 'Émincez l’oignon, coupez le demi-poivron en lanières et coupez les tomates (150 g) en dés.', minutes: 5 },
      { title: 'Faire revenir', text: 'Faites revenir l’oignon et le poivron dans l’huile d’olive 6 minutes à feu moyen, jusqu’à ce qu’ils soient tendres.', minutes: 6 },
      { title: 'Faire la sauce', text: 'Ajoutez la harissa (une cuillère à café) et les tomates, et laissez mijoter 8 minutes à découvert.', minutes: 8 },
      { title: 'Cuire les merguez', text: 'Coupez les merguez (100 g) en rondelles et ajoutez-les à la sauce. Cuisez 5 minutes.', minutes: 5 },
      { title: 'Pocher l’œuf', text: 'Faites un creux dans la sauce, cassez l’œuf dessus, couvrez et laissez cuire 3 à 4 minutes.', minutes: 4 },
      { title: 'Finir', text: 'Parsemez de pecorino râpé (20 g), couvrez 1 minute pour le faire fondre, et servez.', minutes: 1 },
    ],
    tips: [
      'Le pecorino est très salé : n’ajoutez pas de sel avant de le goûter.',
      'Pour un plat plus léger, remplacez les merguez par des filets de poulet.',
      'Servez dans la poêle, avec du pain, pour saucer.',
    ],
    serve: 'Dans la poêle, avec du pain tunisien.',
    storage: 'La sauce se garde 2 jours. Pochez l’œuf au dernier moment.',
  },

  'lablabi-ricotta': {
    intro: 'Un lablabi plus crémeux : les pois chiches mixés avec de la ricotta, qui donne une texture veloutée tout en gardant le cumin et le citron du lablabi tunisien.',
    equipment: ['Un mixeur', 'Une casserole', 'Un bol'],
    prepMinutes: 10,
    cookMinutes: 10,
    steps: [
      { title: 'Chauffer les pois chiches', text: 'Réchauffez les pois chiches (90 g, égouttés) dans une casserole avec 150 ml de bouillon chaud, 5 minutes à feu moyen.', minutes: 5 },
      { title: 'Mixer', text: 'Mixez les pois chiches avec l’ail (1 gousse), le cumin (une demi-cuillère à café), une cuillère d’huile d’olive et un peu de bouillon, jusqu’à une texture veloutée.', minutes: 2 },
      { title: 'Ajouter la ricotta', text: 'Ajoutez la ricotta (40 g) et mixez encore 30 secondes. Rectifiez l’assaisonnement avec du sel et du citron.', minutes: 1 },
      { title: 'Griller le pain', text: 'Coupez le pain (50 g) en morceaux et faites-les griller à la poêle avec un filet d’huile, ou au four 5 minutes.', minutes: 5 },
      { title: 'Servir', text: 'Versez la crème dans un bol, parsemez de pain grillé et d’un filet d’huile d’olive. Ajoutez un peu de citron.', minutes: 1 },
    ],
    tips: [
      'La ricotta rend la crème plus douce : si elle est trop épaisse, ajoutez du bouillon.',
      'Le pain grillé doit rester croustillant : servez-le à part si vous le préférez.',
      'Une pincée de harissa donne une version plus relevée.',
    ],
    serve: 'Chaud, avec du citron et de l’huile d’olive.',
    storage: 'Se garde 2 jours au frais. Réchauffez à feu doux en ajoutant un peu de bouillon.',
  },

  'porridge-banane': {
    intro: 'Un porridge d’avoine à la banane, le petit-déjeuner ou le repas d’avant effort classique : des glucides à digestion lente, une touche sucrée naturelle, et des amandes pour les lipides.',
    equipment: ['Une casserole', 'Une fourchette', 'Un bol'],
    prepMinutes: 3,
    cookMinutes: 7,
    steps: [
      { title: 'Cuire l’avoine', text: 'Dans une casserole, portez le lait (200 ml) à frémissement. Ajoutez les flocons d’avoine (60 g) et baissez le feu.', minutes: 2 },
      { title: 'Remuer', text: 'Remuez 4 à 5 minutes à feu doux, jusqu’à ce que l’avoine épaississe et devienne crémeuse. Ajoutez un peu d’eau si elle est trop épaisse.', minutes: 5 },
      { title: 'Écraser la banane', text: 'Écrasez la banane (1) à la fourchette, dans le bol.', minutes: 1 },
      { title: 'Assembler', text: 'Versez le porridge sur la banane, ajoutez une cuillère à café de miel, et mélangez.', minutes: 1 },
      { title: 'Garnir', text: 'Concassez les amandes (15 g) et parsemez-en le porridge.', minutes: 1 },
    ],
    tips: [
      'Pour un porridge plus léger, utilisez de l’eau à la place du lait.',
      'Mangez-le 1 à 2 heures avant l’effort pour qu’il soit bien digéré.',
      'Les amandes ajoutent des lipides et du croquant : réduisez-les si vous manquez de temps.',
    ],
    serve: 'Chaud, avec de la cannelle si vous l’aimez.',
    storage: 'Se garde mal une fois cuit. Préparez-le au moment de manger.',
  },

  'soupe-lentilles-corail': {
    intro: 'Une soupe de lentilles corail, cuite vite et mixée : des protéines végétales et des glucides faciles à digérer, adaptée à la récupération ou à un repas léger le soir.',
    equipment: ['Une casserole', 'Un mixeur plongeant ou un bol mixeur', 'Une cuillère en bois'],
    prepMinutes: 10,
    cookMinutes: 20,
    steps: [
      { title: 'Faire revenir', text: 'Dans la casserole, faites revenir l’oignon et la carotte émincés dans l’huile d’olive 5 minutes à feu doux. Ajoutez le cumin et laissez parfumer 1 minute.', minutes: 6 },
      { title: 'Cuire les lentilles', text: 'Ajoutez les lentilles corail (80 g), rincées, puis 400 ml de bouillon. Portez à frémissement et laissez cuire 15 minutes, jusqu’à ce que les lentilles se défassent.', minutes: 15 },
      { title: 'Mixer', text: 'Mixez la soupe jusqu’à ce qu’elle soit lisse. Ajoutez un peu d’eau si elle est trop épaisse.', minutes: 2 },
      { title: 'Relever', text: 'Rectifiez le sel, ajoutez le jus d’un quart de citron et un filet d’huile d’olive crue.', minutes: 1 },
    ],
    tips: [
      'Les lentilles corail cuisent en 15 minutes : ne les laissez pas bouillir trop longtemps, elles deviennent pâteuses.',
      'Le citron s’ajoute en fin de cuisson pour garder son goût.',
      'Pour plus de protéines, ajoutez un œuf dur ou du fromage frais.',
    ],
    serve: 'Chaude, avec du pain complet ou un filet de jus de citron.',
    storage: 'Se garde 3 jours au frais. Elle s’épaissit : ajoutez de l’eau au réchauffage.',
  },
};
