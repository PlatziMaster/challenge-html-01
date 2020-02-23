/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/components/ProductCard.styl';

function ProductCard({ product }) {
  return (
    <div className="ProductCard">
      <div className="ProductCard__head">
        {product.tags.map((tag) => (
          <span className="ProductCard__tag" key={product.key}>
            {tag}
          </span>
        ))}
        <figure className="ProductCard__imageFigure">
          <img className="ProductCard__image" src={product.imgSrc} alt="" />
        </figure>
      </div>
      <h1 className="ProductCard__title">{product.title}</h1>
      <p className="ProductCard__subtitle">{product.subtitle}</p>
    </div>
  );
}

export default ProductCard;
