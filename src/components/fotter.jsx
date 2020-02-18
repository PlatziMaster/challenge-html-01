import React from 'react';
import Logo from './logo';

import instagram from '../assets/images/instagram.svg';
import pinterest from '../assets/images/pinterest.svg';
import twitter from '../assets/images/twitter.svg';
import facebook from '../assets/images/facebook.svg';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="copyright">
        <Logo theme="dark" className="logo" />
        <div>
        © 2018 Deck
          <br />
        Component based UI Kit
        </div>
      </div>
      <div className="form-container">
        <form id="subscribe">
          <input type="email" name="email" id="email" placeholder="Your E-mail" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
      <div className="social">
        <span>Follow us:</span>
        <a href="#">
          <img src={instagram} alt="Instagram" height="16px" />
        </a>
        <a href="#">
          <img src={pinterest} alt="Pinterest" height="16px" />
        </a>
        <a href="#">
          <img src={twitter} alt="Twitter" height="16px" />
        </a>
        <a href="#">
          <img src={facebook} alt="Facebook" height="16px" />
        </a>
      </div>
      <div className="menu-container">
        <ul id="bottom-menu">
          <li>
            <a>TECHNOLOGY</a>
          </li>
          <li>
            <a>IDEAS</a>
          </li>
          <li>
            <a>ENTERTAINMENT</a>
          </li>
          <li>
            <a>LEADERSHIP</a>
          </li>
          <li>
            <a>VIDEO</a>
          </li>
          <li>
            <a>NEWS</a>
          </li>
          <li>
            <a>FINANCE</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
