import React from 'react';
import '../styles/components/Footer.styl';
import logo from '../../resources/imgs/Logo.png';

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Logo" />
        <span>© 2018 Deck Component based UI Kit</span>
      </div>
      <div className="footer__links">
        <li>
          <a href="/">TECHNOLOGY</a>
        </li>
        <li>
          <a href="/">IDEAS</a>
        </li>
        <li>
          <a href="/">LEADERSHIP</a>
        </li>
        <li>
          <a href="/">VIDEO</a>
        </li>
        <li>
          <a href="/">NEWS</a>
        </li>
        <li>
          <a href="/">FINANCE</a>
        </li>
        <li>
          <a href="/">ENTRETAINMENT</a>
        </li>
      </div>
      <div className="footer__contact">
        <div className="footer__social-networks">
          <span>Follow Us</span>
          <img src="http://via.placeholder.com/16x16" alt="instagram" />
          <img src="http://via.placeholder.com/16x16" alt="pinterest" />
          <img src="http://via.placeholder.com/16x16" alt="twitter" />
          <img src="http://via.placeholder.com/16x16" alt="facebook" />
        </div>
        <div className="footer__contact-form">
          <input type="text" />
          <input type="submit" value="SUBSCRIBE" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
