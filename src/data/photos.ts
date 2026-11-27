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
};
