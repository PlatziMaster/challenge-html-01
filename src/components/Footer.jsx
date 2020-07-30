import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => (
  <div className="footer__container">
    <div className="footer__container__section1">
      <h1 className="footer__container__section1--title">RedTech</h1>
      <span>2020 RedTech</span>
      <span>Component based UI Kit</span>
    </div>
    <div className="footer__container__navegador">
      <ul>
        <li>TECHNOLOGY</li>
        <li>IDEAS</li>
        <li>LEADERSHIP</li>
        <li>VIDEO</li>
        <li>NEWS</li>
        <li>FINANCE</li>
        <li>ENTERTAINMENT</li>
      </ul>
    </div>
    <div className="footer__container__section2">
      <input type="email" placeholder="Your Email" />
      <button type="submit">SUSCRIBE</button>
      <div className="footer__container__section2__social">
        <p>Follow us:</p>
        <span>
          <AiFillInstagram />
        </span>
        <span>
          <FaPinterestP />
        </span>
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaFacebookF />
        </span>
      </div>
    </div>
  </div>
);
export default Footer;
