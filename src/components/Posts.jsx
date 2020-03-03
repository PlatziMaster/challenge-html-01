import React from 'react';
import Article from './Article';
import articlesMock from '../mocks/articlesMock.json';
import '../styles/components/Posts.styl';

const Posts = () => {
  return (
    <div className="Posts__container">
      {articlesMock.map(item => (
        <Article
          key={item.id}
          title={item.title}
          size={item.size}
          description={item.description}
          imgUrl={item.imgUrl}
        />
      ))}
    </div>
  );
};

export default Posts;
