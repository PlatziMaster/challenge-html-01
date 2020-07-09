import React from 'react';

const Card = props => {
  const { image, title, description, category, size } = props;

  return (
    <article className={`container__card ${size}`}>
      <div className="container__card-image">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <span>{category}</span>
      </div>
      <h3 className="container__card-title">{title}</h3>
      <p className="container__card-description">{description}</p>
    </article>
  );
};

export default Card;
