import React from 'react';
import img1 from '../images/dose-media-344938.png';
import img2 from '../images/aidan-hancock-455440.png';
import img3 from '../images/crew-22235.png';

const News = () => (
  <div className="container__news">
    <div className="container__news__cards">
      <div className="container__item">
        <img className="container__item--img" src={img1} alt="1" />
        <h2 className="container__item--title">
          Using Banner Stands To Increase Trade Show Traffic
        </h2>
        <p className="container__item--description">
          There is a lot of exciting stuff going on in the stars above us that
          make astronomy so much fun.
        </p>
      </div>
      <div className="container__item">
        <img className="container__item--img" src={img2} alt="2" />
        <h2 className="container__item--title">Search Engine Optimization</h2>
        <p className="container__item--description">
          There is a lot of exciting stuff going on in the stars above us that
          make astronomy so much fun.
        </p>
      </div>
      <div className="container__item">
        <img className="container__item--img" src={img2} alt="3" />
        <h2 className="container__item--title">
          Writing A Good Headline For You Advertisement
        </h2>
        <p className="container__item--description">
          There is a lot of exciting stuff going on in the stars above us that
          make astronomy so much fun.
        </p>
      </div>
      <div className="container__item">
        <img className="container__item--img" src={img3} alt="4" />
        <h2 className="container__item--title">
          Using Banner Stands To Increase Trade Show Traffic
        </h2>
        <p className="container__item--description">
          There is a lot of exciting stuff going on in the stars above us that
          make astronomy so much fun.
        </p>
      </div>
      <div className="container__item">
        <img className="container__item--img" src={img3} alt="5" />
        <h2 className="container__item--title">
          Using Banner Stands To Increase Trade Show Traffic
        </h2>
        <p className="container__item--description">
          There is a lot of exciting stuff going on in the stars above us that
          make astronomy so much fun.
        </p>
      </div>
    </div>
  </div>
);

export default News;
