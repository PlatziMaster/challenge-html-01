import React from 'react';
import '../styles/components/Header.styl';
import Nav from './Nav';
import HamburgerButton from './HamburgerButton';

function Header() {
  return (
    <div className="Header">
      <figure className="Header__logoFigure">
        <img className="Header__logo" src="" alt="" />
      </figure>

      <Nav className="Menu" />
      <div className="Hamburger">
        <HamburgerButton className="HamburgerButton" />
      </div>
    </div>
  );
}

export default Header;
