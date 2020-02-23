/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import twitter from '../../resources/imgs/twitter.svg';
import instagram from '../../resources/imgs/instagram.svg';
import pinterest from '../../resources/imgs/pinterest.svg';
import facebook from '../../resources/imgs/facebook.svg';
import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <footer>
      <div className="footer-branding">
        <p className="footer-title">
          Deck
          <span>.</span>
        </p>
        <p>2018 Deck</p>
        <p>Component based UI Kit</p>
      </div>
      <div className="footer-subscribe">
        <div className="subscribe-box">
          <input type="text" placeholder="Your E-mail" id="subscribe" />
          <label htmlFor="subscribe">Suscribirse</label>
        </div>
      </div>
      <div className="footer-socials">
        <p>Follow us</p>
        <img src={instagram} alt="" />
        <img src={pinterest} alt="" />
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
      </div>
      <p>technology</p>
      <p>ideas</p>
      <p>entretaiment</p>
      <p>ladership</p>
      <p>video</p>
      <p>news</p>
      <p>finance</p>
    </footer>
  );
};

export default Footer;
