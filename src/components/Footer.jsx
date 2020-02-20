import React from 'react';
import '../styles/components/Footer.styl';
import logoDark from '../assets/logo-dark.jpg';

const Footer = ({ sections }) => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src={logoDark} alt="Logo" />
        <p>© 2018 Deck</p>
        <p>Component base UI kit</p>
      </div>
      <div className="footer__social">
        <form className="footer__social--form" action="">
          <input type="text" placeholder="Your E-mail" />
          <button type="submit">SUBSCRIBE</button>
        </form>
        <ul className="footer__social--list">
          <li>
            <p>Follow us:</p>
          </li>
          <li>
            <span className="instagram" />
          </li>
          <li>
            <span className="pinterest" />
          </li>
          <li>
            <span className="twitter" />
          </li>
          <li>
            <span className="facebook" />
          </li>
        </ul>
      </div>
      <div className="footer__menu">
        {sections.map(section => (
          <a key={section} href="/" className="footer__menu--item">
            {section}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
