import React from 'react';

import Instagram from '../assets/PNG/instagram@2x.png';
import Twitter from '../assets/PNG/twitter@2x.png';
import Facebook from '../assets/PNG/facebook@2x.png';
import Pinterest from '../assets/PNG/pinterest@2x.png';

const Footer = () => (
  <footer>
    <div className="right-side">
      <div className="logo--container">
        <p className=".footer--logo">
          Deck
          <span>.</span>
        </p>
      </div>
      <div className="disclaimer--container">
        <p>
          © 2018 Deck 
          {' '}
          <br />
          Component based UI Kit
        </p>
      </div>
    </div>
    <div className="menu--container">
      <ul>
        <li>
          <a href="/">Technology</a>
        </li>
        <li>
          <a href="/">Ideas</a>
        </li>
        <li>
          <a href="/">Leadership</a>
        </li>
        <li>
          <a href="/">Video</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Finance</a>
        </li>
        <li>
          <a href="/">Entertainment</a>
        </li>
      </ul>
    </div>
    <div className="left-side">
      <div className="social--container">
        <p>Follow us: </p>
        <img src={Instagram} alt="" />
        <img src={Pinterest} alt="" />
        <img src={Twitter} alt="" />
        <img src={Facebook} alt="" />
      </div>
      <div className="suscribe--container">
        <input type="email" name="" id="" placeholder="Your E-mail" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  </footer>
);

export default Footer;
