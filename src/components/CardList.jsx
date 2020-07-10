import React from 'react';
// La manera que se conectan estos documentos es mediante un import, so, el que maneja la logica y la data es este documento y aqui tambien se le pasan parametros al elemtno <Card /> es por ello que en documento card solo es necesario decirle donde muestre dicha información
import Card from './Card';
// Aqui genere una constante que simmula la info de una api va dentro de una constante y se iguala a un array
const cardListData = [
  {
    title: 'Using Banners Will Increase Trade Show Traffic',
    description:
      'There is a lot exciting stuff going on in the stars above us that makes astronomy so much fun.',
    image: '../src/assets/images/dose-media-344938.png',
    type: 'TECHNOLOGY',
    id: 1,
  },
  {
    title:
      '6 Powerful Tips For Creating Testimonials That Sell Your Products Fast',
    description:
      'There is a lot exciting stuff going on in the stars above us that makes astronomy so much fun.',
    image: '../src/assets/images/annie-spratt-213059.png',
    type: 'TECHNOLOGY',
    id: 2,
  },
  {
    title: '15 Tips To Increase Your Adwords Profits',
    description:
      'There is a lot exciting stuff going on in the stars above us that makes astronomy so much fun.',
    image: '../src/assets/images/jeff-sheldon-264920.png',
    type: 'ENTERTAINMENT',
    id: 4,
  },
  {
    title: 'Search Engine Optimization And Advertising',
    description:
      'There is a lot exciting stuff going on in the stars above us that makes astronomy so much fun.',
    image: '../src/assets/images/aidan-hancock-455440.png',
    type: 'TECHNOLOGY',
    id: 5,
  },
  {
    title: '15 Tips To Increase Your Adwords Profits',
    description:
      'There is a lot exciting stuff going on in the stars above us that makes astronomy so much fun.',
    image: '../src/assets/images/jeff-sheldon-264920.png',
    type: 'ENTERTAINMENT',
    id: 7,
  },
  {
    title: 'How to Write A Good Headline For Facebook Ads',
    description:
      'There is a lot exciting stuff going on in the stars above us that makes astronomy so much fun.',
    image: '../src/assets/images/crew-22235.png',
    type: 'FINANCE',
    id: 3,
  },
  {
    title: 'How to Write A Good Headline For Facebook Ads',
    description:
      'There is a lot exciting stuff going on in the stars above us that makes astronomy so much fun.',
    image: '../src/assets/images/crew-22235.png',
    type: 'FINANCE',
    id: 8,
  },
  {
    title: 'Using Banners Will Increase Trade Show Traffic',
    description:
      'There is a lot exciting stuff going on in the stars above us that makes astronomy so much fun.',
    image: '../src/assets/images/dose-media-344938.png',
    type: 'TECHNOLOGY',
    id: 6,
  },
  {
    title: 'Search Engine Optimization And Advertising',
    description:
      'There is a lot exciting stuff going on in the stars above us that makes astronomy so much fun.',
    image: '../src/assets/images/aidan-hancock-455440.png',
    type: 'TECHNOLOGY',
    id: 9,
  },
];

// esta funcion hara un llamado simulado del arreglo anterior mediante la variable cardListData.map(dentro recibe como parametro una funcion que recibe otro parametro, es decir cardData se convierte en el arreglo, entonces se extrae su id y luego se descompone con los tres puntos antes del nombre//Lo que hara map es ejecutar la card de acuerdo al nunmero de elementos que este contenga ==>>Continua el proceso en Card.jsx)
function CardList() {
  return (
    <div className="CardList">
      <div className="CardList__grid">
        {cardListData.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
