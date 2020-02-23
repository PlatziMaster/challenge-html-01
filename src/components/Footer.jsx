// eslint-disable-next-line react/jsx-one-expression-per-line
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import twitter from '../../resources/imgs/twitter.svg';
import instagram from '../../resources/imgs/instagram.svg';
import pinterest from '../../resources/imgs/pinterest.svg';
import facebook from '../../resources/imgs/facebook.svg';
import '../styles/components/Footer.sass';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__branding">
        <p className="Footer__title">
          Deck
          <span>.</span>
        </p>
        <p>&copy; {new Date().getFullYear()} Deck</p>
        <p>Component based UI Kit</p>
      </div>

      <div className="Footer__tags flex-container flex-start">
        <p>technology</p>
        <p>ladership</p>
        <p>news</p>
        <p>entretaiment</p>
        <p>ideas</p>
        <p>video</p>
        <p>finance</p>
      </div>

      <div className="Footer__contact">
        <div className="Footer__socials">
          <p>Follow us:</p>
          <img src={instagram} alt="" />
          <img src={pinterest} alt="" />
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
        </div>
        <div className="Footer__subscribe">
          <input type="email" placeholder="Your E-mail" id="subscribe" />
          <label htmlFor="subscribe">Subscribe</label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
