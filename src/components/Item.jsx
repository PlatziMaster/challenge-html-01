import React from 'react';
import '../styles/components/Item.styl';
import hero from '../../resources/imgs/aidan-hancock-455440.png';

const Item = () => {
  return (
    <div className="Item">
      <div className="Item__hero">
        <span className="Item__hero--tag">Technology</span>
        <figure className="Item__hero--image">
          <img src={hero} alt="" />
        </figure>
      </div>
      <div className="Item__description">
        <h2 className="Item__description--title">
          Search Engine Optimization And Advertising
        </h2>
        <h3 className="Item__description--subtitle">
          There us a lot of exciting stuff going on in the starts above us that
          make astronomy so much fun.
        </h3>
      </div>
    </div>
  );
};

export default Item;
