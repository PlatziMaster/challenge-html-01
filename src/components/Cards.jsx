import React from 'react';
import Card from './Card';
import '../styles/components/Cards.styl';

const products = [
  {
    title: 'Using Banner Stands To Increase Trade Show Traffic',
    description:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
    categorie: 'Technology',
    img: '../../resources/imgs/dose-media-344938.png',
    level: 1,
  },
  {
    title: 'Search Engine Optimization And Advertising',
    description:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
    categorie: 'Technology',
    img: '../../resources/imgs/aidan-hancock-455440.png',
    level: 2,
  },
  {
    title: 'Writting A Good Headline For Your Advertisement',
    description:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
    categorie: 'Finance',
    img: '../../resources/imgs/crew-22235.png',
    level: 1,
  },
  {
    title: '15 Tips To Increase Your Adwords Profits',
    description:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
    categorie: 'Entertainment',
    img: '../../resources/imgs/jeff-sheldon-264920.png',
    level: 1,
  },
  {
    title:
      '6 Powerful Tips To Creating Testimonials That Sell Your Products Fast',
    description:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
    categorie: 'Technology',
    img: '../../resources/imgs/annie-spratt-213059.png',
    level: 2,
  },
  {
    title: 'Using Banner Stands To Increase Trade Show Traffic',
    description:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
    categorie: 'Technology',
    img: '../../resources/imgs/dose-media-344938.png',
    level: 1,
  },
  {
    title: '15 Tips To Increase Your Adwords Profits',
    description:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
    categorie: 'Entertainment',
    img: '../../resources/imgs/jeff-sheldon-264920.png',
    level: 1,
  },
  {
    title: 'Writting A Good Headline For Your Advertisement',
    description:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
    categorie: 'Finance',
    img: '../../resources/imgs/crew-22235.png',
    level: 1,
  },
  {
    title: 'Search Engine Optimization And Advertising',
    description:
      'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
    categorie: 'Technology',
    img: '../../resources/imgs/aidan-hancock-455440.png',
    level: 2,
  },
];

const Cards = () => {
  // console.log(products);
  return (
    <div className="cards__container">
      <Card product={products[0]} />
      <Card product={products[1]} />
      <Card product={products[2]} />
      <Card product={products[3]} />
      <Card product={products[4]} />
      <Card product={products[5]} />
      <Card product={products[6]} />
      <Card product={products[7]} />
      <Card product={products[8]} />
    </div>
  );
};

export default Cards;
