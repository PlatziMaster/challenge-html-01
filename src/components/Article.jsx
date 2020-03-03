import React from 'react';
import '../styles/components/Article.styl';

const Article = ({ title, size, description, imgUrl }) => {
  return (
    <div className={`Article__container ${size}`}>
      <div className="Article__container--img">
        <figure>
          <img src={`../../${imgUrl}`} alt="" />
        </figure>
        <div>Categoria</div>
      </div>
      <div className="Article__container--content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Article;
