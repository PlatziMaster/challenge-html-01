import React from 'react';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        Deck
        <span>.</span>
      </div>
      <nav className="header__nav">
        <ul>
          <li>Technology</li>
          <li>Ideas</li>
          <li>Leadership</li>
          <li>Vide</li>
          <li>News</li>
          <li>Finance</li>
          <li>Entertainment</li>
        </ul>
      </nav>
      <div className="header__burger">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
