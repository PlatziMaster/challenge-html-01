import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo';

import instagram from '../assets/images/instagram.svg';
import pinterest from '../assets/images/pinterest.svg';
import twitter from '../assets/images/twitter.svg';
import facebook from '../assets/images/facebook.svg';

import '../styles/components/Footer.styl';
import '../styles/components/Menu.styl';

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
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your E-mail"
          />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
      <div className="social">
        <span>Follow us:</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/"
        >
          <img src={instagram} alt="Instagram" height="16px" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pinterest.com/"
        >
          <img src={pinterest} alt="Pinterest" height="16px" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/"
        >
          <img src={twitter} alt="Twitter" height="16px" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/"
        >
          <img src={facebook} alt="Facebook" height="16px" />
        </a>
      </div>
      <div className="menu-container">
        <ul id="bottom-menu">
          <li>
            <Link to="/technology">TECHNOLOGY</Link>
          </li>
          <li>
            <Link to="/ideas">IDEAS</Link>
          </li>
          <li>
            <Link to="/entertainment">ENTERTAINMENT</Link>
          </li>
          <li>
            <Link to="/leadership">LEADERSHIP</Link>
          </li>
          <li>
            <Link to="/video">VIDEO</Link>
          </li>
          <li>
            <Link to="/news">NEWS</Link>
          </li>
          <li>
            <Link to="/finance">FINANCE</Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
