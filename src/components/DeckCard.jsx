import React from 'react';
import '../assets/styles/components/DeckCard.styl';

const DeckCard = props => {
  const { image, title, description, tag, size } = props;

  return (
    <article className={`DeckCard ${size}`}>
      <div className="DeckCard__imgContainer">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="DeckCard__tag">{tag}</div>
      </div>
      <p className="DeckCard__title">{title}</p>
      <p className="DeckCard__description">{description}</p>
    </article>
  );
};

export default DeckCard;
