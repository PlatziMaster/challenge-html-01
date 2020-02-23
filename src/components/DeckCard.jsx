import React from 'react';
import '../assets/styles/components/DeckCard.styl';

const DeckCard = props => {
  const { image, title, description, tag, size } = props;

  return (
    <article className={`DeckCard ${size}`}>
      <div className="DeckCard--imgContainer">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="DeckCard--tag">{tag}</div>
      </div>
      <p className="DeckCard--title">{title}</p>
      <p className="DeckCard--description">{description}</p>
    </article>
  );
};

export default DeckCard;
