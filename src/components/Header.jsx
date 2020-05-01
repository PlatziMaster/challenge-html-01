import React from 'react';
import '../styles/components/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>
        Deck
        <span>.</span>
      </h1>
      <nav className="header__nav">
        <ul>
          <li className="nav__item">
            <a href="/">Technology</a>
          </li>
          <li className="nav__item">
            <a href="/">Ideas</a>
          </li>
          <li className="nav__item">
            <a href="/">Leadership</a>
          </li>
          <li className="nav__item">
            <a href="/">Video</a>
          </li>
          <li className="nav__item">
            <a href="/">News</a>
          </li>
          <li className="nav__item">
            <a href="/">Finance</a>
          </li>
          <li className="nav__item">
            <a href="/">Entertainment</a>
          </li>
        </ul>
        <div id="nav__hamburg">
          <label htmlFor="hamburg">
            &#9776;
            <input type="checkbox" id="hamburg" />
          </label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
