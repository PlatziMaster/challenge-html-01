/* eslint-disable no-shadow */
import React from 'react';
import '../styles/components/Cart.styl';

const Cart = ({ id, subtitle, url, category, title, height }) => {
  const targetSize = height => {
    switch (height) {
      case 'small':
        return 'cart item level-3';
      case 'medium':
        return 'cart item level-2';
      case 'large':
        return 'cart item level-1';
      default:
        return 'cart item';
    }
  };
  return (
    <div key={id} className={targetSize(height)}>
      <div className="cart-imgContainer">
        <div className="cart-imgContainer__redTitleContainer">
          <h1 className="imgContainer-redTitleContainer__redTitle">
            {category}
          </h1>
        </div>
        <img src={url} alt="" className="cart-imgContainer__img" />
      </div>
      <div className="cart-description">
        <h2 className="cart-description__subtitle">{title}</h2>
        <p className="cart-description__paragraph">{subtitle}</p>
      </div>
    </div>
  );
};

export default Cart;
