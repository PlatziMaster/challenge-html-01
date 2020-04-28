import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__company">
        <h2 className="footer__company--title">
          Deck
          <span>.</span>
        </h2>
        <p className="footer__company--text">&copy; 2018 Deck</p>
        <p className="footer__company--text">Component based UI kit</p>
      </div>
      <div className="footer__nav">
        <ul>
          <li>Technology</li>
          <li>Ideas</li>
          <li>Leadership</li>
          <li>Video</li>
          <li>News</li>
          <li>Finance</li>
          <li>Entertainment</li>
        </ul>
      </div>
      <div className="footer__socialMedia">
        <ul>
          <li>Follow us:</li>
          <li>
            <img src="../../resources/imgs/instagram.png" alt="" />
          </li>
          <li>
            <img src="../../resources/imgs/pinterest.png" alt="" />
          </li>
          <li>
            <img src="../../resources/imgs/twitter.png" alt="" />
          </li>
          <li>
            <img src="../../resources/imgs/facebook.png" alt="" />
          </li>
        </ul>
      </div>
      <div className="footer__subscribe">
        <input type="text" name="" id="" placeholder="Your E-mail" />
        <button type="submit">Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
