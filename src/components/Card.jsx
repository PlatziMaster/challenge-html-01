import React from 'react';

import '../styles/components/Card.css';

const Card = ({ category, title, description, imageInfo, level }) => (
  <div className={`card card--level${level}`}>
    <div className="card__image">
      <img src={imageInfo && imageInfo.src} alt={imageInfo && imageInfo.alt} />
      <span>{category}</span>
    </div>
    <div className="card__info">
      <div className="card__title">{title}</div>
      <div className="card__description">{description}</div>
    </div>
  </div>
);

export default Card;
