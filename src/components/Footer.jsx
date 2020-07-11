import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faPinterestP,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

import '../assets/styles/App.styl';

const Footer = () => (
  <footer className="Footer">
    <div className="Footer__content">
      <div className="Footer__brand">
        <h3 className="Footer__brand--logo">
          Deck
          <span className="Footer__brand--logo-decorate">.</span>
        </h3>
        <p className="Footer__brand--text">© 2018 Deck</p>
        <p className="Footer__brand--text">Component based UI kit</p>
      </div>
      <div className="Footer__menu">
        <ul className="Footer__menu--list">
          <Link to="/">
            <li className="Footer__menu--list__item">TECHNOLOGY</li>
          </Link>
          <Link to="/">
            <li className="Footer__menu--list__item">IDEAS</li>
          </Link>
          <Link to="/">
            <li className="Footer__menu--list__item">LEADERSHIP</li>
          </Link>
          <Link to="/">
            <li className="Footer__menu--list__item">VIDEO</li>
          </Link>
          <Link to="/">
            <li className="Footer__menu--list__item">NEWS</li>
          </Link>
          <Link to="/">
            <li className="Footer__menu--list__item">FINANCE</li>
          </Link>
          <Link to="/">
            <li className="Footer__menu--list__item">ENTERTAIMENT</li>
          </Link>
        </ul>
      </div>
      <div className="Footer__actions">
        <div className="Footer__actions--social">
          <p>Follow us:</p>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterestP} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="Footer__actions--contact">
          <form action="">
            <input
              className="Footer__actions--contact-1"
              type="email"
              name="email"
              placeholder="Your E-mail"
              id=""
            />
            <input
              className="Footer__actions--contact-2"
              type="submit"
              value="SUSCRIBE"
            />
          </form>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
