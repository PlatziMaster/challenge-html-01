import React from 'react';
import '../assets/styles/components/DeckCard.styl';
import image1 from '../assets/static/image1.png';

const DeckCard = () => {
  return (
    <article className="DeckCard">
      <img className="DeckCard--image" src={image1} alt="" />
      <span className="DeckCard--tag">TECHNOLOGY</span>
      <p className="DeckCard--title">
        Searching Engine Optimization And Advertisement
      </p>
      <p className="DeckCard--description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae corporis
        nostrum exercitationem eos debitis.
      </p>
    </article>
  );
};

export default DeckCard;
