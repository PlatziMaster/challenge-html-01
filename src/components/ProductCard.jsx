/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/components/ProductCard.styl';

function ProductCard({ product }) {
  return <div>{product.title}</div>;
}

export default ProductCard;
