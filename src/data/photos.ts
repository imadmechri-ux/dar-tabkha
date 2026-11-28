export interface DishPhoto {
  /** Chemin relatif au site, dans public/photos/. */
  src: string;
  credit: string;
  /** Page source de l'image sur Wikimedia Commons. */
  url: string;
  /** Licence de réutilisation. */
  license: string;
}

// Photos libres de droits trouvées sur Wikimedia Commons (licences CC0, CC BY ou CC BY-SA).
// Chaque image doit être contrôlée : l'appariement au plat a été vérifié visuellement.
export const PHOTOS: Record<string, DishPhoto> = {
  'lablabi': { src: 'photos/lablabi.jpg', credit: 'Touzrimounir', url: 'https://commons.wikimedia.org/wiki/File:Lablabi_3.JPG', license: 'CC BY-SA 4.0' },
  'ojja-merguez': { src: 'photos/ojja-merguez.jpg', credit: 'Maherdz', url: 'https://commons.wikimedia.org/wiki/File:Ojjaauxboulettes.jpg', license: 'Public domain' },
  'chakchouka': { src: 'photos/chakchouka.jpg', credit: 'Joe Mahoney', url: 'https://commons.wikimedia.org/wiki/File:Shakshuka1.jpg', license: 'CC BY 2.0' },
  'brik-oeuf': { src: 'photos/brik-oeuf.jpg', credit: 'Souad Anane Lesina', url: 'https://commons.wikimedia.org/wiki/File:Brik_Edennouni.JPG', license: 'CC BY-SA 3.0' },
  'mloukhia-simple': { src: 'photos/mloukhia-simple.jpg', credit: 'Meriemou', url: 'https://commons.wikimedia.org/wiki/File:Mloukhia.jpg', license: 'CC BY-SA 4.0' },
  'slata-mechouia': { src: 'photos/slata-mechouia.jpg', credit: 'Citizen59', url: 'https://commons.wikimedia.org/wiki/File:SaladeMechouia_2013.JPG', license: 'CC BY 3.0' },
  'couscous-poisson': { src: 'photos/couscous-poisson.jpg', credit: 'No machine-readable author provided. Elcèd77 assumed (based on copyright claims)', url: 'https://commons.wikimedia.org/wiki/File:Fish_couscous_from_Kerkenah,_Tunisia,_August_16th,_2007.jpg', license: 'CC BY-SA 3.0' },
  'bsisa': { src: 'photos/bsisa.jpg', credit: 'Yamen', url: 'https://commons.wikimedia.org/wiki/File:Bsissa_02.JPG', license: 'CC BY-SA 3.0' },
  'spaghetti-aglio-olio': { src: 'photos/spaghetti-aglio-olio.jpg', credit: 'matsuyuki', url: 'https://commons.wikimedia.org/wiki/File:Spaghetti_aglio_olio_e_peperoncino_by_matsuyuki_retouched.jpg', license: 'CC BY-SA 2.0' },
  'pasta-pomodoro-basilic': { src: 'photos/pasta-pomodoro-basilic.jpg', credit: 'Catia Giaccherini', url: 'https://commons.wikimedia.org/wiki/File:Pasta_10.jpg', license: 'CC BY-SA 3.0' },
  'pasta-norma': { src: 'photos/pasta-norma.jpg', credit: 'Paoletta S.', url: 'https://commons.wikimedia.org/wiki/File:Pasta_alla_Norma_(2563876877).jpg', license: 'CC BY 2.0' },
  'pasta-tonno-capperi': { src: 'photos/pasta-tonno-capperi.jpg', credit: 'Civa61', url: 'https://commons.wikimedia.org/wiki/File:Pasta_al_rag%C3%B9_di_tonno_rosso.jpg', license: 'CC BY-SA 4.0' },
  'pasta-e-ceci': { src: 'photos/pasta-e-ceci.jpg', credit: 'Rollopack', url: 'https://commons.wikimedia.org/wiki/File:Pasta_e_ceci_con_maltagliati_di_pasta_all%E2%80%99uovo.jpg', license: 'CC BY-SA 4.0' },
  'caponata': { src: 'photos/caponata.jpg', credit: 'sandys', url: 'https://commons.wikimedia.org/wiki/File:Caponata_(57386191).jpg', license: 'CC BY-SA 2.0' },
  'frittata-epinards': { src: 'photos/frittata-epinards.jpg', credit: 'Dedda 71', url: 'https://commons.wikimedia.org/wiki/File:Frittata2.jpg', license: 'CC BY 3.0' },
  'pollo-cacciatora': { src: 'photos/pollo-cacciatora.jpg', credit: 'Evan Joshua Swigart (TheCulinaryGeek) from Chicago, Illinois, USA; hometown of A', url: 'https://commons.wikimedia.org/wiki/File:Flickr_preppybyday_4618397089--Chicken_cacciatore.jpg', license: 'CC BY 2.0' },
  'risotto-simple': { src: 'photos/risotto-simple.jpg', credit: 'Benoît Prieur', url: 'https://commons.wikimedia.org/wiki/File:Risotto_de_gambas,_restaurant_Danieli_(Vienne,_Autriche).jpg', license: 'CC0' },
  'carbonara': { src: 'photos/carbonara.jpg', credit: 'Mattes Boch (Mboch on English Wikipedia)', url: 'https://commons.wikimedia.org/wiki/File:Spaghetti_alla_Carbonara.jpg', license: 'Public domain' },
  'pasta-pesto-courgette': { src: 'photos/pasta-pesto-courgette.jpg', credit: 'Marco Del Torchio 95', url: 'https://commons.wikimedia.org/wiki/File:Pasta_al_pesto_fatto_in_casa.jpg', license: 'CC BY-SA 4.0' },
  'porridge-banane': { src: 'photos/porridge-banane.jpg', credit: 'Shisma', url: 'https://commons.wikimedia.org/wiki/File:Banana_oatmeal.jpg', license: 'CC BY 4.0' },
  'soupe-lentilles-corail': { src: 'photos/soupe-lentilles-corail.jpg', credit: 'E4024', url: 'https://commons.wikimedia.org/wiki/File:Mercimek_%C3%A7orbasi.jpg', license: 'CC BY-SA 4.0' },
  'ojja-pecorino': { src: 'photos/ojja-pecorino.jpg', credit: 'Junbinhuang', url: 'https://commons.wikimedia.org/wiki/File:Shakshuka_Dish.jpg', license: 'CC BY 4.0' },
  'lablabi-ricotta': { src: 'photos/lablabi-ricotta.jpg', credit: 'Mohatatou', url: 'https://commons.wikimedia.org/wiki/File:Lablabi_%C3%A0_Paris,_2019.jpg', license: 'CC BY-SA 4.0' },
  'bowl-quinoa-poulet': { src: 'photos/bowl-quinoa-poulet.jpg', credit: 'Sharon Chen from Austin, United States', url: 'https://commons.wikimedia.org/wiki/File:Our_favorite_quinoa_bowl_with_beef_and_lamb_plus_a_spicy_chicken_wrap!_SO_GOOD!_-TasteVERTS_(29322059930).jpg', license: 'CC BY 2.0' },
  'tajine-oeufs-pdt': { src: 'photos/tajine-oeufs-pdt.jpg', credit: 'Habib M’henni', url: 'https://commons.wikimedia.org/wiki/File:Tajine_tunisien,_2019.jpg', license: 'CC BY-SA 4.0' },
  'chorba-frik': { src: 'photos/chorba-frik.jpg', credit: 'IssamBarhoumi', url: 'https://commons.wikimedia.org/wiki/File:Chorba_Frik.jpg', license: 'CC BY-SA 4.0' },
  'fricasse-thon': { src: 'photos/fricasse-thon.jpg', credit: 'Noomen9', url: 'https://commons.wikimedia.org/wiki/File:Fricass%C3%A9.jpg', license: 'CC BY-SA 4.0' },
  'kafteji': { src: 'photos/kafteji.jpg', credit: 'Dhouha BOUSSALEM', url: 'https://commons.wikimedia.org/wiki/File:Kafteji_Kairouan.jpg', license: 'CC BY-SA 4.0' },
  'ojja-crevettes': { src: 'photos/ojja-crevettes.jpg', credit: 'HaJunkiyada', url: 'https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Shrimp_Shakshuka.jpg', license: 'CC BY-SA 4.0' },
  'couscous-poulet': { src: 'photos/couscous-poulet.jpg', credit: 'Ypsilon from Finland', url: 'https://commons.wikimedia.org/wiki/File:Chicken_couscous_in_Tangier.jpg', license: 'CC0' },
  'salade-tunisienne': { src: 'photos/salade-tunisienne.jpg', credit: 'Emna Mizouni', url: 'https://commons.wikimedia.org/wiki/File:Tunisian_Salad.jpg', license: 'CC BY-SA 4.0' },
  'ragu-bolognese': { src: 'photos/ragu-bolognese.jpg', credit: 'https://www.flickr.com/photos/wordridden/', url: 'https://commons.wikimedia.org/wiki/File:Tagliatelle_rag%C3%B9_bolognese_01.jpg', license: 'CC BY 2.0' },
  'minestrone': { src: 'photos/minestrone.jpg', credit: 'Katrin Morenz from Aachen, Deutschland', url: 'https://commons.wikimedia.org/wiki/File:Minestrone_soup.jpg', license: 'CC BY-SA 2.0' },
  'cacio-e-pepe': { src: 'photos/cacio-e-pepe.jpg', credit: 'Popo le Chien', url: 'https://commons.wikimedia.org/wiki/File:Cacio_e_pepe.jpg', license: 'CC BY-SA 3.0' },
  'parmigiana': { src: 'photos/parmigiana.jpg', credit: 'Flickr.com user "Blue Lotus"', url: 'https://commons.wikimedia.org/wiki/File:Melanzane_alla_Parmigiana.jpg', license: 'CC BY 2.0' },
  'caprese': { src: 'photos/caprese.jpg', credit: 'Pantone801', url: 'https://commons.wikimedia.org/wiki/File:Insalata_caprese.jpg', license: 'CC BY-SA 3.0' },
  'panzanella': { src: 'photos/panzanella.jpg', credit: 'LupoCapra at Italian Wikipedia', url: 'https://commons.wikimedia.org/wiki/File:Panzanella_1_(1).jpg', license: 'CC BY-SA 3.0' },
  'puttanesca': { src: 'photos/puttanesca.jpg', credit: 'Popo le Chien', url: 'https://commons.wikimedia.org/wiki/File:Pasta_Puttanesca.jpg', license: 'CC BY-SA 4.0' },
  'pizza-harissa-mozzarella': { src: 'photos/pizza-harissa-mozzarella.jpg', credit: 'Mario56', url: 'https://commons.wikimedia.org/wiki/File:Margherita_Originale.JPG', license: 'CC BY-SA 3.0' },
  'tartine-miel-huile': { src: 'photos/tartine-miel-huile.jpg', credit: 'Emna Mizouni', url: 'https://commons.wikimedia.org/wiki/File:Olive_oil_and_honey.jpg', license: 'CC BY-SA 4.0' },
  'makroud': { src: 'photos/makroud.jpg', credit: 'Zeinebtakouti', url: 'https://commons.wikimedia.org/wiki/File:Makroudh_P%C3%A2tisserie_tunisienne_08.jpg', license: 'CC BY-SA 4.0' },
  'sfenj': { src: 'photos/sfenj.jpg', credit: 'Maor X', url: 'https://commons.wikimedia.org/wiki/File:Sfenj_sprinkled_with_sugar_and_served_on_a_plate.jpg', license: 'CC BY-SA 4.0' },
  'malfouf-chou': { src: 'photos/malfouf-chou.jpg', credit: 'Silar', url: 'https://commons.wikimedia.org/wiki/File:02022_Hungarian_stuffed_cabbage_rolls_in_pickled_cabbage_leaves_with_veal_and_deer_meat.jpg', license: 'CC BY-SA 4.0' },
  'pancakes-banane-avoine': { src: 'photos/pancakes-banane-avoine.jpg', credit: 'sunny mama', url: 'https://commons.wikimedia.org/wiki/File:Banana_egg_pancakes_(17024234376).jpg', license: 'CC BY-SA 2.0' },
  'pain-perdu-cannelle': { src: 'photos/pain-perdu-cannelle.jpg', credit: 'W.carter', url: 'https://commons.wikimedia.org/wiki/File:French_toast_with_cinnamon_and_coconut_flakes.jpg', license: 'CC BY-SA 4.0' },
  'avocat-toast-oeuf': { src: 'photos/avocat-toast-oeuf.jpg', credit: 'Asramsey', url: 'https://commons.wikimedia.org/wiki/File:Fresh_Avocado_Toast_with_Egg.jpg', license: 'CC BY-SA 4.0' },
  'menemen': { src: 'photos/menemen.jpg', credit: 'E4024', url: 'https://commons.wikimedia.org/wiki/File:Turkish_egg_dish_Menemen.jpg', license: 'CC BY-SA 4.0' },
  'msemen-simple': { src: 'photos/msemen-simple.jpg', credit: 'Indif', url: 'https://commons.wikimedia.org/wiki/File:Msemmen-Ghrayef.jpg', license: 'CC BY-SA 3.0' },
  'bowl-yaourt-fruits': { src: 'photos/bowl-yaourt-fruits.jpg', credit: 'Jumbocombo0811', url: 'https://commons.wikimedia.org/wiki/File:Yogurt_fruit_bowl.jpg', license: 'CC BY-SA 4.0' },
};
