import React from 'react';
import '../styles/components/Footer.styl';
import logoDark from '../assets/logo-dark.jpg';
import insta from '../assets/insta.jpg';

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
            <span className="instagram">
              <img src={insta} alt="" />
            </span>
          </li>
          <li>
            <span className="pinterest">
              <img src={insta} alt="" />
            </span>
          </li>
          <li>
            <span className="twitter">
              <img src={insta} alt="" />
            </span>
          </li>
          <li>
            <span className="facebook">
              <img src={insta} alt="" />
            </span>
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
