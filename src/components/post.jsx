import React from 'react';

const Post = ({ title, category, text, img }) => (
  <div className="item">
    <div className="content">
      <img src={img} alt={category} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default Post;
