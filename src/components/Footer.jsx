import React from 'react';
import '../styles/components/Footer.styl';

const Footer = ({ sections }) => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <p>logo</p>
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
            <span>Follow us:</span>
          </li>
          <li>i</li>
          <li>p</li>
          <li>t</li>
          <li>f</li>
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
