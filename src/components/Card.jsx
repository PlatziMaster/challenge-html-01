import React from 'react';
import '../styles/components/Card.styl';

const Card = () => {
  return (
    <div className="card">
      <div className="card--content">
        <figure className="card--figure">
          <img
            className="card--content-img"
            src="/resources/imgs/dose-media-344938.png"
            alt="Using banner stand to increase trade show traffic"
          />
          <figcaption>Category Name</figcaption>
        </figure>
        <div className="card--content__description">
          <h3 className="description--title">
            Using banner stand to increase trade show traffic
          </h3>
          <p className="description--desc">
            There is a lot of exciting stuff going on in the stars above us the
            make astronomy so mouch fun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
