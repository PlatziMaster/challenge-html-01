import React from 'react';
import '../styles/components/footer.styl';

const Footer = () => {
  return (
    <footer>
      <div className="footer__brand">
        <h1>
          {' '}
          Deck
          <span>.</span>
        </h1>
        <p>2018 Deck</p>
        <p>Component based UI Kit</p>
      </div>
      <div className="footer__section">
        <ul>
          <li>TECNOLOGY</li>
          <li>IDEAS</li>
          <li>LEADERSHIP</li>
          <li>VIDEO</li>
          <li>NEWS</li>
          <li>FINANCE</li>
          <li>ENTERTAINMENT</li>
        </ul>
      </div>
      <div className="footer__social">
        <p>Follow us: . . . .</p>
        <div className="footer__social-input">
          <input type="text" placeholder="Your Email" />
          <button type="submit">SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
