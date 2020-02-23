import React from 'react';
import '../styles/components/ProductCard.styl';

const ProductItem = ({ img, tag, title, description, level }) => {
  return (
    <div className={`productcard productcard__level-${level}`}>
      <div className="productcard__image">
        <img className="productcard__image" src={img} alt="" />
        <span className="productcard__tag">{tag}</span>
      </div>
      <h1 className="productcard__title">{title}</h1>
      <p className="productcard__description">{description}</p>
    </div>
  );
};

export default ProductItem;
