import React from 'react';
import '../styles/components/Card.styl';

const Card = ({ product }) => {
  const { title, img, categorie, description, level } = product;
  if (level === 1) {
    return (
      <div className="card level-1">
        <div className="card__img">
          <img src={img} alt="" />
          <p className="card__img--categorie">{categorie}</p>
        </div>
        <div className="card__body">
          <h2 className="card__body--title">{title}</h2>
          <p className="card__body--description">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="card level-2">
      <div className="card__img">
        <img src={img} alt="" />
        <p className="card__img--categorie">{categorie}</p>
      </div>
      <div className="card__body">
        <h2 className="card__body--title">{title}</h2>
        <p className="card__body--description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
