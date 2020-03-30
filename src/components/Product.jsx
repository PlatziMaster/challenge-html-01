import React from 'react';
import '../styles/components/Product.styl';

const Product = ({ category, title, description, imgSource }) => {
  return (
    <>
      <div className="Product__container">
        <div className="Product__container--figure">
          <figure className="Product__container--image">
            <img src={imgSource} alt={title} />
          </figure>
          <div className="Product__container--category">
            <h4>{category}</h4>
          </div>
        </div>
        <div className="Product__container--details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
