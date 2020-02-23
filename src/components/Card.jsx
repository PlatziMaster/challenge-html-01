import React from 'react';
import '../styles/components/Card.sass';

const Card = ({ id, image, tag, title, description }) => {
  return (
    <div className="Card item">
      <div className="Card__image">
        <img src={image} alt={id} />
        <h6 className="Card__tag">{tag}</h6>
      </div>
      <p className="Card__title">{title}</p>
      <p className="Card__description">{description}</p>
    </div>
  );
};

export default Card;
