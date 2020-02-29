import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>
          Deck
          <span>.</span>
        </h1>
      </div>
      <div className="header__navigation">
        <a href="/">TECHNOLOGY</a>
        <a href="/">IDEAS</a>
        <a href="/">LEADERSHIP</a>
        <a href="/">VIDEO</a>
        <a href="/">NEWS</a>
        <a href="/">FINANCE</a>
        <a href="/">ENTERTAINMENT</a>
      </div>
      <button className="header__button" type="button">
        <i className="fas fa-bars" />
      </button>
    </div>
  );
};

export default Header;
