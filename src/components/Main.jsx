/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import '../styles/components/Main.styl';
import Img1 from '../../resources/imgs/cosa2.jpg';
import Img2 from '../../resources/imgs/aidan-hancock-455440.png';
import Img3 from '../../resources/imgs/future.jpg';
import Img4 from '../../resources/imgs/dose-media-344938.png';
import Img5 from '../../resources/imgs/cosa1.jpg';

const Main = () => {
  return (
    <div className="Main">
      <div className="item level-1">
        <img atl="hand" src={Img1} />
      </div>
      <div className="item level-3">
        <img atl="hand" src={Img2} />
      </div>
      <div className="item level-1">
        <img atl="hand" src={Img3} />
      </div>
      <div className="item level-2">
        <img atl="hand" src={Img4} />
      </div>
      <div className="item level-1">
        <img atl="hand" src={Img5} />
      </div>
      <div className="item level-1">
        <img atl="hand" src={Img1} />
      </div>
      <div className="item level-3">
        <img atl="hand" src={Img2} />
      </div>
      <div className="item level-2">
        <img atl="hand" src={Img3} />
      </div>
      <div className="item level-2">
        <img atl="hand" src={Img4} />
      </div>
      <div className="item level-1">
        <img atl="hand" src={Img5} />
      </div>
    </div>
  );
};

export default Main;
