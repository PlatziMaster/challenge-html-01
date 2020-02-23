import React from 'react';
import products from '../constants/products';
import Card from './Card';

const Posts = () => (
  <div className="container">
    <div className="masonry">
      {products.map(({ id, title, description, image, tag }) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            tag={tag}
          />
        );
      })}
    </div>
  </div>
);

export default Posts;
