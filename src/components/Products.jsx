import React from 'react';
import Product from './Product';
import Articles from '../productsData/Articles.json';
import '../styles/components/Products.styl';

const Products = () => {
  return (
    <section className="Products">
      <div className="Products__card">
        {Articles.map(({ id, category, title, description, imgSource }) => {
          return (
            <Product
              key={id}
              category={category}
              title={title}
              description={description}
              imgSource={imgSource}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
