import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/App.styl';

const Header = () => (
  <header className="Header">
    <div className="Header__content">
      <h3 className="Header__logo">
        Deck
        <span className="Header__logo--decorate">.</span>
      </h3>
      <div className="Header__menu">
        <div className="Header__menu--icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className="Header__menu--list">
          <Link to="/">
            <li className="Header__menu--list__item">TECHNOLOGY</li>
          </Link>
          <Link to="/">
            <li className="Header__menu--list__item">IDEAS</li>
          </Link>
          <Link to="/">
            <li className="Header__menu--list__item">LEADERSHIP</li>
          </Link>
          <Link to="/">
            <li className="Header__menu--list__item">VIDEO</li>
          </Link>
          <Link to="/">
            <li className="Header__menu--list__item">NEWS</li>
          </Link>
          <Link to="/">
            <li className="Header__menu--list__item">FINANCE</li>
          </Link>
          <Link to="/">
            <li className="Header__menu--list__item">ENTERTAIMENT</li>
          </Link>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
