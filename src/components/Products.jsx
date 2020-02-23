import React from 'react';
import '../styles/components/Products.styl';

const Products = ({ children }) => {
  return <div className="product__container">{children}</div>;
};

export default Products;
