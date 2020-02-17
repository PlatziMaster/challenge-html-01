/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/components/ListOfProductCards.styl';
import ProductCard from './ProductCard';

function ListOfProductCards({ products = [] }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
}

export default ListOfProductCards;
