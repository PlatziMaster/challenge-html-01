import React from 'react';
import LabelCategory from './LabelCategory';

const CardSummary = ({ category, title, descrip, imageObj }) => {
  return (
    <div className='container-card'>
      <div className='card'>
        <div className='card__container'>
          <figure className='card-figure'>
            <img
              className='card-figure__img'
              src={imageObj.src}
              alt={imageObj.alt}
            />
            <figcaption className='card-figure__caption'>
              <LabelCategory text={category} />
            </figcaption>
          </figure>
          <div className='card-text__container'>
            <h2 className='card-text__title'>{title}</h2>
            <p className='card-text__descrip'>{descrip}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSummary;
