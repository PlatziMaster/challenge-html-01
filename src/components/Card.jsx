import React from 'react';

import Tech from '../../resources/imgs/dose-media-344938.png';
import Tech2 from '../../resources/imgs/aidan-hancock-455440.png';
import Finance from '../../resources/imgs/crew-22235.png';
import Tech3 from '../../resources/imgs/annie-spratt-213059.png';
import Entertainment from '../../resources/imgs/jeff-sheldon-264920.png';

const Card = ({ tag, title, imgsrc }) => {
  let image = '';
  switch (imgsrc) {
    case 'Tech':
      image = Tech;
      break;
    case 'Tech2':
      image = Tech2;
      break;
    case 'Finance':
      image = Finance;
      break;
    case 'Tech3':
      image = Tech3;
      break;
    case 'Entertainment':
      image = Entertainment;
      break;
    default:
      image = Tech;
      break;
  }
  return (
    <div className="card">
      <div className="card--image--container">
        <img src={image} alt="" />
        <p className="card--image--tag">{tag}</p>
      </div>
      <h2 className="card--title">{title}</h2>
      <p className="card--description">
        There is a lot of exciting stuff going on in the stars above us that
        makes astronomy so much fun.
      </p>
    </div>
  );
};

export default Card;
