import React from 'react';

import '../styles/components/Item.styl';

const Item = ({ img, title, description, category }) => (
  <div className="item">
    <figure className="item__image">
      <img src={img} alt={title} />
      <span>{category}</span>
    </figure>
    <h3 className="item__title">{title}</h3>
    <p className="item__description">{description}</p>
  </div>
);

export default Item;
