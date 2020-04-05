import React from 'react';

import burguerIcon from '../assets/SVG/open-menu.svg';

const Header = () => (
  <header>
    <div className="header--left">
      <p className=".header--left--logo">
        Deck
        <span>.</span>
      </p>
      <nav className="header--left--menu">
        <ul>
          <li>
            <a href="/">Technology</a>
          </li>
          <li>
            <a href="/">Ideas</a>
          </li>
          <li>
            <a href="/">Leadership</a>
          </li>
          <li>
            <a href="/">Video</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Finance</a>
          </li>
          <li>
            <a href="/">Entertainment</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="header--right">
      <img src={burguerIcon} alt="" />
    </div>
  </header>
);

export default Header;
