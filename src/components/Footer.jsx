import React from 'react';

import '../styles/components/Footer.styl';

const Footer = () => (
  <div className="footer">
    <h2>Deck</h2>
    <ul>
      <li>TECHNOLOGY</li>
      <li>IDEAS</li>
      <li>LEADERSHIP</li>
      <li>VIDEO</li>
      <li>NEWS</li>
    </ul>

    <span className="footer__input">
      <input type="email" />
      <button type="button">Suscribe</button>
    </span>
  </div>
);

export default Footer;
