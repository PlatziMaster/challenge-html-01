import React from 'react';

const card = ({ type, size, img, tag, title, description }) => {
  return (
    <section className={type`${type}-${size}`}>
      <img src={img} alt={tag} />
      <h4>{tag}</h4>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};

export default card;
