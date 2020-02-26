import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';
import MenuIcon from './MenuIcon';

const Header = () => {
  const doVisibleNav = () => {
    const $headerNav = document.getElementById('header__nav');
    $headerNav.classList.toggle('header__nav--visible');
    $headerNav.classList.toggle('header__nav--hidden');
  };

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>

      <button
        type='button'
        className='header__menu-icon'
        onClick={doVisibleNav}
      >
        <MenuIcon />
      </button>

      <button
        type='button'
        id='header__nav'
        className='header__nav header__nav--hidden'
        onClick={doVisibleNav}
      >
        <Nav />
      </button>
    </header>
  );
};

export default Header;
