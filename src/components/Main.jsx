import React from 'react';
import '../styles/components/Main.styl';

import imagen1 from '../../resources/imgs/dose-media-344938.png';
import imagen2 from '../../resources/imgs/aidan-hancock-455440.png';
import imagen3 from '../../resources/imgs/crew-22235.png';

const Main = () => {
  return (
    <div className="Main">
      <div className="Main-item Main-level1">
        <img src={imagen1} alt="" />
        <span className="Main-item__category-item">TECHNOLOGY</span>
        <h2 className="Main-item__title-item">
          Using Banner Stands To Increase Trade Show Traffic
        </h2>
        <p className="Main-item__detail-item">
          The is a lot of exciting stuff going on in the stars above is that
          make astronomy so much fun.
        </p>
      </div>
      <div className="Main-item Main-level2">
        <img src={imagen2} alt="" />
        <span className="Main-item__category-item">FINANCE</span>
        <h2 className="Main-item__title-item">
          Search Engine Optimization And Advertising
        </h2>
        <p className="Main-item__detail-item">
          The is a lot of exciting stuff going on in the stars above is that
          make astronomy so much fun.
        </p>
      </div>
      <div className="Main-item Main-level1">
        <img src={imagen3} alt="" />
        <span className="Main-item__category-item">TECHNOLOGY</span>
        <h2 className="Main-item__title-item">
          Writing A Good Headline For Your Advertisement
        </h2>
        <p className="Main-item__detail-item">
          The is a lot of exciting stuff going on in the stars above is that
          make astronomy so much fun.
        </p>
      </div>
      <div className="Main-item Main-level2">
        <img src={imagen1} alt="" />
        <span className="Main-item__category-item">TECHNOLOGY</span>
        <h2 className="Main-item__title-item">
          Using Banner Stands To Increase Trade Show Traffic
        </h2>
        <p className="Main-item__detail-item">
          The is a lot of exciting stuff going on in the stars above is that
          make astronomy so much fun.
        </p>
      </div>
      <div className="Main-item Main-level1">
        <img src={imagen2} alt="" />
        <span className="Main-item__category-item">FINANCE</span>
        <h2 className="Main-item__title-item">
          Search Engine Optimization And Advertising
        </h2>
        <p className="Main-item__detail-item">
          The is a lot of exciting stuff going on in the stars above is that
          make astronomy so much fun.
        </p>
      </div>
      <div className="Main-item Main-level2">
        <img src={imagen3} alt="" />
        <span className="Main-item__category-item">TECHNOLOGY</span>
        <h2 className="Main-item__title-item">
          Writing A Good Headline For Your Advertisement
        </h2>
        <p className="Main-item__detail-item">
          The is a lot of exciting stuff going on in the stars above is that
          make astronomy so much fun.
        </p>
      </div>
    </div>
  );
};
export default Main;
