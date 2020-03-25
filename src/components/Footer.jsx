import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-logo">
      <h3>Deck.</h3>

      <p>
        © 2018 Deck
        <br />
        Component based UI Kit
      </p>
    </div>
    <div className="footer-categories">
      <a href="/">TECHNOLOGY</a>
      <a href="/">IDEAS</a>
      <a href="/">LEADERSHIP</a>
      <a href="/">VIDEO</a>
      <a href="/">NEWS</a>
      <a href="/">FINANCE</a>
      <a href="/">ENTERTAINMENT</a>
    </div>
    <div className="footer-social">
      <div className="footer-social__media">
        <p>Follow us:</p>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="footer-social__subscribe">
        <input type="email" placeholder="Your E-mail" />
        <button type="button">SUBSCRIBE</button>
      </div>
    </div>
  </footer>
);

export default Footer;
