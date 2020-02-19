import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Card.styl';

const Card = ({ img, tag, title, description }) => {
  return (
    <div className="card__container">
      <div className="card__img-container">
        <img className="card__img-container--img" alt="card_img" src={img} />
        <p className="card__img-container--tag">{tag}</p>
      </div>
      <div className="card__text-container">
        <h4 className="card__text-container--title">{title}</h4>
        <p className="card__text-container--description">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
