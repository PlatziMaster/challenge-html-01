import React from 'react';
import '../styles/components/BlogItem.css';

const BlogItem = ({ cover, tag, title, description }) => (
  <div className="item-container">
    <div className="item-img">
      <label htmlFor="description">{tag}</label>
      <img className="item-img__img" src={cover} alt="img" />
    </div>
    <div className="item-description">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </div>
);

export default BlogItem;
