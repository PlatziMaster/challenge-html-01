import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../assets/static/2.png';
import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src={brand} alt="/" />
        <p>@2020 Deck</p>
        <p>Component based UI Kit</p>
        <p>Luis Colunga Perez 2k2k</p>
      </div>
      <nav className="footer__navbar">
        <ol className="footer__navbar--list">
          <li>
            <Link to="/">TECHNOLOGY</Link>
          </li>
          <li>
            <Link to="/">IDEAS</Link>
          </li>
          <li>
            <Link to="/">ENTERTAINMEINT</Link>
          </li>
          <li>
            <Link to="/">LEADERSHIP</Link>
          </li>
          <li>
            <Link to="/">VIDEO</Link>
          </li>
          <li>
            <Link to="/">NEWS</Link>
          </li>
          <li>
            <Link to="/">FINANCE</Link>
          </li>
        </ol>
      </nav>
      <div className="footer__subscrite">
        <p>
          Follow us: <i className="fab fa-instagram"></i>{' '}
          <i className="fab fa-pinterest"></i>{' '}
          <i className="fab fa-twitter"></i>{' '}
          <i className="fab fa-facebook-square"></i>
        </p>
        <form className="footer__subscrite--form">
          <input type="email" id="subscrite" placeholder="Your E-mail" />
          <button type="button">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
