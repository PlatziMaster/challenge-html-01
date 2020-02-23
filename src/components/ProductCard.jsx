/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/components/ProductCard.styl';

function ProductCard({ product }) {
  return (
    <div className={`${product.class}`}>
      <div className={`${product.class}__head`}>
        <figure className={`${product.class}__imageFigure`}>
          <img
            className={`${product.class}__image`}
            src={product.imgSrc}
            alt=""
          />
          {product.tags.map((tag) => (
            <span className="imageFigure__tag" key={product.key}>
              {tag}
            </span>
          ))}
        </figure>
      </div>
      <h1 className={`${product.class}__title`}>{product.title}</h1>
      <p className={`${product.class}__subtitle`}>{product.subtitle}</p>
    </div>
  );
}

export default ProductCard;
