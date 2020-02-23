import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__info">
        <ul>
          <li className="Footer__info__item logocolor logo">
            Deck 
            {' '}
            <span className="logocolor2">.</span>
          </li>
          <li className="Footer__info__item lowcolor">2020 Deck</li>
          <li className="Footer__info__item lowcolor">
            Component based UI Kit
          </li>
        </ul>
      </div>

      <div className="Footer__main uppercase">
        <h3 className="">
          Leadership 
          {' '}
          <br />
          {' '}
video
        </h3>
        <h3 className="">
          Technology 
          {' '}
          <br />
          {' '}
Ideas
        </h3>
        <h3 className="">
          News 
          {' '}
          <br />
          finance
        </h3>
        <h3 className="">Entertament</h3>
      </div>

      <div className="Footer__social">
        <ul className="Footer__social__menu lowcolor">
          <li>Follow us:</li>
          <li>
            <img src="../../resources/imgs/instagram.png" alt="facebook" />
          </li>
          <li>
            <img src="../../resources/imgs/pinterest.png" alt="facebook" />
          </li>
          <li>
            <img src="../../resources/imgs/twitter.png" alt="facebook" />
          </li>
          <li>
            <img src="../../resources/imgs/facebook.png" alt="facebook" />
          </li>
        </ul>
      </div>
      <div className="Footer__form">
        <input
          type="text"
          placeholder="Your Email"
          id="inputSubscribe"
          className="Footer__form__input"
        />
        <button type="button" className="Footer__form__btn uppercase">
          Subscribe
        </button>
      </div>
    </footer>
  );
};

export default Footer;
