import React from 'react';
import '../styles/components/Footer.styl';
import logo from '../../resources/imgs/LogoFooter.png';

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Logo" />
        <span>© 2018</span>
        <span>Deck Component based UI Kit</span>
      </div>
      <div className="footer__links">
        <li>
          <a href="/">TECHNOLOGY</a>
        </li>
        <li>
          <a href="/">LEADERSHIP</a>
        </li>
        <li>
          <a href="/">NEWS</a>
        </li>
        <li>
          <a href="/">ENTRETAINMENT</a>
        </li>
        <li>
          <a href="/">IDEAS</a>
        </li>
        <li>
          <a href="/">VIDEO</a>
        </li>
        <li>
          <a href="/">FINANCE</a>
        </li>
      </div>
      <div className="footer__contact">
        <div className="footer__social-networks">
          <span>Follow us:</span>
          <a href="/">
            <i className="fa fa-instagram footer__social-networks--instagram " />
          </a>
          <a href="/">
            <i className="fa fa-pinterest-p footer__social-networks--pinterest" />
          </a>
          <a href="/">
            <i className="fa fa-twitter footer__social-networks--twitter" />
          </a>
          <a href="/">
            <i className="fa fa-facebook footer__social-networks--facebook" />
          </a>
        </div>
        <div className="footer__contact-form">
          <input
            type="text"
            className="footer__contact-email"
            placeholder="Your E-mail"
          />
          <input
            type="submit"
            value="SUBSCRIBE"
            className="footer__contact-send-button"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
