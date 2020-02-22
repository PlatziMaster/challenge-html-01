import React from 'react';

const Post = ({ title, category, text, img }) => (
  <div className="card">
    <div className="image">
      <img src={img} alt={category} width="100%" />
      <span className="category">{category}</span>
    </div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

export default Post;
