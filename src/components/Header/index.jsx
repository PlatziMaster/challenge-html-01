import React from 'react';
import Logo from '../Logo';

import HeaderNav from './HeaderNav';
import HeaderBurger from './HeaderBurger';

import '../../styles/components/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <HeaderNav />
      <HeaderBurger />
    </header>
  );
};

Header.propTypes = {};

export default Header;
