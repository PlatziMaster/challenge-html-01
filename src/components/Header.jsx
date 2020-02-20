import React from 'react';
import '../assets/styles/components/Header.styl';

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <span>Deck</span>
        <span>.</span>
      </div>
      <nav>
        <ul>
          <li>TECHNOLOGY</li>
          <li>IDEAS</li>
          <li>LEADERSHIP</li>
          <li>VIDEO</li>
          <li>NEWS</li>
          <li>FINANCE</li>
          <li>ENTERTAINMENT</li>
        </ul>
        <div htmlFor="toggle">&#9776;</div>
        <input type="checkbox" id="toggle" />
      </nav>
    </header>
  );
};

export default Header;
