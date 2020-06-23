import React from 'react';

import '../styles/components/Header.styl';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <span>Deck</span>
      <span className="header__logo-dot">.</span>
    </div>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li>technology</li>
        <li>ideas</li>
        <li>leadership</li>
        <li>video</li>
        <li>news</li>
        <li>finance</li>
        <li>entretainment</li>
      </ul>
    </nav>
    <figure className="header__menu">
      <img src="../../resources/imgs/menu-abierto.svg" alt="" />
    </figure>
  </header>
);

export default Header;
