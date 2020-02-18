import React from 'react';
import Logo from './logo';

const Footer = () => (
  <footer>
    <div className="container">
      <Logo theme="dark" />
      <div className="copyright">
        © 2018 Deck
        <br />
        Component based UI Kit
      </div>
      <div className="form-container">
        <form>
          <input type="email" name="email" id="email" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
      <div className="social">
        <span>Follow us:</span>
        Instagram Pinterest Twitter Facebook
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
          <li>
            <a>ENTERTAINMENT</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
