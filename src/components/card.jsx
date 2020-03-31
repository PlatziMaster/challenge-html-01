import React from 'react';

const card = ({ type, img, tag, title, description }) => {
  return (
    <section className={`${type}`}>
      <div className={`${type}__img`}>
        <img src={img} alt={tag} />
        <h6 className={`${type}__img-tag`}>
          {String(tag).toLocaleUpperCase()}
        </h6>
      </div>
      <h2 className={`${type}__title`}>{title}</h2>
      <p className={`${type}__description`}>{description}</p>
    </section>
  );
};

export default card;
