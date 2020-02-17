/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/components/ListOfProductCards.styl';
import ProductCard from './ProductCard';

function ListOfProductCards({ products = [] }) {
  return (
    <div className="ListOfProductCards">
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ListOfProductCards;
