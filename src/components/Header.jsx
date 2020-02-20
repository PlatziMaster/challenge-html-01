import React from 'react';
import '../assets/styles/components/Header.styl';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <div className="header__logo">
              <span className="header__logo--color1">Deck</span>
              <span className="header__logo--color2">.</span>
            </div>
          </li>
          <li>
            <a href="/">TECHNOLOGY</a>
          </li>
          <li>IDEAS</li>
          <li>LEADERSHIP</li>
          <li>VIDEO</li>
          <li>NEWS</li>
          <li>FINANCE</li>
          <li>ENTERTAINMENT</li>
        </ul>
      </nav>
      <div className="nav__icon" htmlFor="toggle">
        &#9776;
      </div>
      <input type="checkbox" id="toggle" />
    </header>
  );
};

export default Header;
