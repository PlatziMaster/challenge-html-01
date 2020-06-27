import React from 'react';
import '../styles/components/Card.styl';

const Card = ({ img, area, title, description }) => {
  return (
    <section className="card">
      <img src={img} alt="No pudo cargar la imagen" />
      <div className="card__area">
        <h2>{area}</h2>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default Card;
