
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'SUCCESS PLUS',
    category: 'Supplement',
    price: 1200.00,
    description: 'A natural, herbal supplement designed to support vitality, stamina, and overall wellbeing.',
    longDescription: 'Success Plus is a premium herbal formulation derived from the potent Mucuna Pruriens bean. Traditionally known as "Velvet Bean", this adaptogen has been used in Ayurveda for centuries to revitalize the reproductive system, enhance mood through dopamine support, and boost physical stamina. Our organic sourcing ensures that you receive the purest form of this revitalizing herb, free from synthetic additives. It acts as a restorative tonic for the nervous system and helps combat the effects of stress.',
    image: 'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764411187/Screenshot_2025-11-29-14-20-30-05_40deb401b9ffe8e1df2f1cc5ba480b12_py96a5.jpg',
    images: [
      'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764411187/Screenshot_2025-11-29-14-20-30-05_40deb401b9ffe8e1df2f1cc5ba480b12_py96a5.jpg',
      'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764411188/81VjYM0QcnL_e0bncv.jpg',
      'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764411188/91VQG0kITFL_lmxfcj.jpg',
      'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764411188/91KU_bG_buL_j5sjrj.jpg'
    ],
    benefits: ['Vitality', 'Stamina', 'Overall Wellbeing', 'Mucuna Pruriens'],
    ingredients: [
      'Organic Mucuna Pruriens Extract',
      'Ashwagandha Root',
      'Shilajit Resin',
      'Safed Musli',
      'Natural Excipients'
    ],
    usage: 'Mix 1 teaspoon (approx. 5g) of powder with warm milk or water. Consume once daily, preferably 30 minutes before bedtime. For optimal results, use consistently for 90 days alongside a balanced diet.'
  },
  {
    id: 'p2',
    name: 'Herbal Queen',
    category: 'Supplement',
    price: 440.00,
    description: 'Herbal Queen Garcinia Cambogia Essence – Natural Weight Loss Support without any diet & exercise.',
    longDescription: 'Herbal Queen is a concentrated essence of Garcinia Cambogia, a tropical fruit known for its ability to block the body\'s ability to make fat and put the brakes on your appetite. This liquid formula is designed for rapid absorption, providing immediate support for your weight management goals without the need for harsh stimulants. It supports healthy metabolism, helps curb cravings naturally, and promotes a feeling of fullness.',
    image: 'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764412554/2_20251129_160457_0001_sxqqup.jpg',
    images: [
      'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764412554/2_20251129_160457_0001_sxqqup.jpg',
      'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764412554/3_20251129_160458_0002_pw3xto.jpg',
      'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764412555/4_20251129_160458_0003_qswopz.jpg',
      'https://res.cloudinary.com/ditsmq3r6/image/upload/v1764412555/1_20251129_160457_0000_kdgvqr.jpg'
    ],
    benefits: ['Weight Loss', 'Garcinia Cambogia', '100% Herbal', 'Safe & Effective'],
    ingredients: [
      'Pure Garcinia Cambogia Essence (60% HCA)',
      'Green Coffee Bean Extract',
      'Purified Water',
      'Lemon Essence',
      'Natural Preservatives'
    ],
    usage: 'Add 15 drops (approx. 5ml) to a glass of warm water. Drink on an empty stomach first thing in the morning. Wait at least 30 minutes before eating breakfast to allow for full absorption.'
  }
];
