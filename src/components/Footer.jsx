import React from 'react';
import '../assets/styles/components/Footer.styl';
import fb from '../assets/static/fb.png';
import ig from '../assets/static/ig.png';
import pt from '../assets/static/pt.png';
import tw from '../assets/static/tw.png';

const Footer = () => (
  <footer>
    <div className="footer__container">
      <div className="footer_brand">
        <p className="footer__brand-paragraph-first">Deck</p>
        <p className="footer__brand-paragraph-second">.</p>
        <p>© 2018 </p>
        <p>Deck Component based UI Kit</p>
      </div>
      <div className="footer__list">
        <ul className="footer__list-item">
          <li>Technology</li>
          <li>Ideas</li>
        </ul>
        <ul className="footer__list-item">
          <li>Leadership</li>
          <li>Video</li>
        </ul>
        <ul className="footer__list-item">
          <li>News</li>
          <li>Finance</li>
        </ul>
        <ul className="footer__list-item">
          <li>Entertainment</li>
          <li />
        </ul>
      </div>
      <div className="footer__followus">
        <div className="footer__followus-container">
          <p>Follow us: </p>
          <img src={ig} alt="siguenos en instagram" />
          <img src={pt} alt="siguenos en pinterest" />
          <img src={tw} alt="siguenos en twitter" />
          <img src={fb} alt="siguenos en facebook" />
        </div>
      </div>
      <div className="footer__subscribe">
        <div className="footer__contact">
          <input
            type="text"
            className="footer__subscribe-input"
            placeholder="Your E-mail"
          />
          <button type="button" className="footer__subscribe-button">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
