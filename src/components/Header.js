import React from 'react';

import '../styles/components/Header.styl';

import Logo from './Logo';

const Header = () => {
  return (
    <nav>
      <Logo />
      <div className="navs">
        <a href="/">TECHNOLOGY</a>
        <a href="/">IDEAS</a>
        <a href="/">LEADERSHIP</a>
        <a href="/">VIDEO</a>
        <a href="/">NEWS</a>
        <a href="/">FINANCE</a>
        <a href="/">ENTERTAINMENT</a>
      </div>
    </nav>
  );
};

export default Header;
