import React from 'react';
import Card from './Card';
import '../styles/components/Posts.styl';

const Posts = () => {
  return (
    <div className="posts container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Posts;
