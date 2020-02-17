import React from 'react';
import '../styles/components/Header.styl';
import './Nav'

function Header() {
  return (
    <div className ="Header">
      <figure className="Header__logoFigure">
        <img className="Header__logo" src="" alt="" />
      </figure>
      <Nav />
      <span className="icon-menu" />
    </div>
  );y
}

export default Header;
