import React from 'react';
import '../../styles/components/Card/_Card.styl';

const Card = ({ img, area, title, description }) => {
  return (
    <section className="card">
      <img src={img} alt="Imagen" />
      <div className="card_area">
        <h2 className="card_area-title">{area}</h2>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default Card;
