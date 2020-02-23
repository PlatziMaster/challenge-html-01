import React from 'react';
import Card from './Card';
import '../styles/components/Posts.styl';

const Posts = ({ posts = [] }) => {
  return (
    <div className="posts container">
      {posts.map(card => (
        <Card
          title={card.title}
          id={card.title}
          key={card.id}
          pictureUrl={card.pictureUrl}
          excerpt={card.excerpt}
          category={card.category}
        />
      ))}
    </div>
  );
};

export default Posts;
