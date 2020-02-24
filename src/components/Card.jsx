import React from 'react';
import '../styles/components/Card.styl';

const Card = ({ title, category, excerpt, pictureUrl }) => {
  return (
    <div className="card">
      <div className="card--content">
        <figure className="card--figure">
          <img className="card--content-img" src={pictureUrl} alt={title} />
          {category && <figcaption>{category}</figcaption>}
        </figure>
        <div className="card--content__description">
          <h3 className="description--title">{title}</h3>
          <p className="description--desc">{excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
