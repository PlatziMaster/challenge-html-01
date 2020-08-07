import React from 'react';

const Card = ({ title, type, image, description }) => {
  return (
    <div>
      <div className="Card">
        <div className="Card__image">
          <img src={image} alt="imagen" />
        </div>
        <div className="Card__label">
          <p>{type}</p>
        </div>
        <div className="Card__title">
          <h2>{title}</h2>
        </div>
        <div className="Card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
