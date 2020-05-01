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
          <li className="nav__item">Technology</li>
          <li className="nav__item">Ideas</li>
          <li className="nav__item">Leadership</li>
          <li className="nav__item">Video</li>
          <li className="nav__item">News</li>
          <li className="nav__item">Finance</li>
          <li className="nav__item">Entertainment</li>
        </ul>
      </nav>
      <div id="hamburg">
        <label htmlFor="hamburg">
          &#9776;
          <input type="checkbox" id="hamburg" />
        </label>
      </div>
    </header>
  );
}

export default Header;
