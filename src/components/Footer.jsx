import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo">
      <span className="footer__logo-brand">
        Deck
        <span className="footer__logo-dot">.</span>
      </span>
      <span className="footer__logo-mr">©2018 Deck</span>
      <span className="footer__logo-mr">Component based IU Kit</span>
    </div>
    <nav className="footer__nav">
      <ul className="footer__nav-list">
        <li>technology</li>
        <li>ideas</li>
        <li>leadership</li>
        <li>video</li>
        <li>news</li>
        <li>finance</li>
        <li>entretainment</li>
      </ul>
    </nav>
    <div className="footer__contact">
      <div className="footer__contact-socialmedia">
        <span>Follow us:</span>
        <ul>
          <li>
            <img
              src="../../resources/imgs/instagram.png"
              alt="logo instagram"
            />
          </li>
          <li>
            <img
              src="../../resources/imgs/pinterest.png"
              alt="logo pinterest"
            />
          </li>
          <li>
            <img src="../../resources/imgs/twitter.png" alt="logo twitter" />
          </li>
          <li>
            <img src="../../resources/imgs/facebook.png" alt="logo facebook" />
          </li>
        </ul>
      </div>
      <div className="footer__contact-suscribe">
        <input type="email" placeholder="Your E-mail" />
        <button type="submit" onClick="">
          subscribe
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
