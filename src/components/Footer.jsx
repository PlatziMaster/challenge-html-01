import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__info">
        <span className="Footer__info--title">Deck.</span>
        <span>&copy; 2018 Deck</span>
        <span>Component based UI Kit</span>
      </div>
      <nav className="Footer__nav">
        <menu className="Footer__menu">
          <li>
            <a href="./">Technology</a>
          </li>
          <li>
            <a href="./">Ideas</a>
          </li>
          <li>
            <a href="./">Leadership</a>
          </li>
          <li>
            <a href="./">Video</a>
          </li>
          <li>
            <a href="./">News</a>
          </li>
          <li>
            <a href="./">Finance</a>
          </li>
          <li>
            <a href="./">Entertainment</a>
          </li>
        </menu>
      </nav>
      <div className="Footer__container">
        <div className="Footer__socialContainer">
          Follow us:
          <a href="./">
            <div className="Footer__socialCotainer--Instagram" />
            <img src="./resources/icons/instagram.svg" alt="instagram icons" />
          </a>
          <a href="./">
            <div className="Footer__socialCotainer--Pinterest" />
            <img src="./resources/icons/pinterest.svg" alt="instagram icons" />
          </a>
          <a href="./">
            <div className="Footer__socialCotainer--Twitter" />
            <img src="./resources/icons/twitter.svg" alt="instagram icons" />
          </a>
          <a href="./">
            <div className="Footer__socialCotainer--Facebook" />
            <img src="./resources/icons/facebook.svg" alt="instagram icons" />
          </a>
        </div>
        <div className="Footer__subscribe">
          <input type="text" placeholder="Your E-mail" />
          <button type="button" title="subscribe">
            {' '}
            Subscribe
            {' '}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
