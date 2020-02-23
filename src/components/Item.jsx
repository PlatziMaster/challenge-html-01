import React from 'react';
import '../styles/components/Item.styl';

const Item = ({ hero, tag, title, subtitle }) => {
  return (
    <div className="Item">
      <div className="Item__hero">
        <span className="Item__hero--tag">{tag}</span>
        <figure className="Item__hero--image">
          <img src={hero} alt="" />
        </figure>
      </div>
      <div className="Item__description">
        <h2 className="Item__description--title">{title}</h2>
        <h3 className="Item__description--subtitle">{subtitle}</h3>
      </div>
    </div>
  );
};

export default Item;
