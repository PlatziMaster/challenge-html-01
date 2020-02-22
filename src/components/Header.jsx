/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import menuIcon from '../assets/menu.png';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <p>
          Deck
          <span>.</span>
        </p>
      </div>
      <input id="menu" type="checkbox" />
      <nav className="header-nav">
        <a href="/">technology</a>
        <a href="/">Home</a>
        <a href="/">ideas</a>
        <a href="/">leadership</a>
        <a href="/">video</a>
        <a href="/">finance</a>
        <a href="/">entertaiment</a>
      </nav>
      <div className="header-button">
        <label htmlFor="menu">
          <img src={menuIcon} alt="boton de menu" />
        </label>
      </div>
    </header>
  );
};

export default Header;
