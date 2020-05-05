import React from 'react';
import '../styles/components/header.styl';

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>
          Deck
          <span>.</span>
        </h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li>TECNOLOGY</li>
          <li>IDEAS</li>
          <li>LEADERSHIP</li>
          <li>VIDEO</li>
          <li>NEWS</li>
          <li>FINANCE</li>
          <li>ENTERTAINMENT</li>
        </ul>
      </nav>
      <div className="header__menu">
        <div className="header__menu-container">
          <div className="menu-button" />
        </div>
      </div>
    </header>
  );
};

export default Header;
