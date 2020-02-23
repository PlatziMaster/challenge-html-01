import React from 'react';
import '../styles/components/ProductCard.styl';

const ProductItem = ({ img, tag, title, description }) => {
  return (
    <div className="productcard">
      <span className="productcard__tag">{tag}</span>
      <div className="productcard__image">
        <img className="productcard__image" src={img} alt="" />
      </div>
      <h1 className="productcard__title">{title}</h1>
      <p className="productcard__description">{description}</p>
    </div>
  );
};

export default ProductItem;
