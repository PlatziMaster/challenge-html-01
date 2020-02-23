import React from 'react';
import Card from './Card';
import posts from '../constants/posts';
import '../styles/components/Posts.sass';

const Posts = () => (
  <div className="container">
    <div className="masonry">
      {posts.map(({ id, title, description, image, tag }) => {
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
