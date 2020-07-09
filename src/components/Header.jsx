import React from 'react';

import '../assets/styles/components/Header.styl';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="header__nav">
        <ul>
          <li>Tecnology</li>
          <li>Ideas</li>
          <li>Leadership</li>
          <li>Video</li>
          <li>News</li>
          <li>Finance</li>
          <li>Entertainment</li>
        </ul>
      </nav>
      <div className="header__icon-burger">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </header>
  );
};

export default Header;
