import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../assets/static/1.png';
import buttonIcon from '../assets/static/hamburguer.svg';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <img src={brand} alt="/" className="brand" />
        <ol className="header__navbar--list">
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

      <button className="header__button">
        <img src={buttonIcon} alt="Icon" />
      </button>
    </header>
  );
};

export default Header;
