import React from 'react';
import '../styles/components/Header.styl';
import Logo from '../../resources/imgs/Logo.png';

const Header = () => {
  return (
    <div className="header">
      <figure className="header__img">
        <img src={Logo} alt="logo" />
      </figure>
      <nav className="nav" id="nav" alt="menu">
        <ul className="nav__menu">
          <li className="nav__menu--items">
            <a href="/">TECHNOLOGY</a>
          </li>
          <li className="nav__menu--items">
            <a href="/">IDEAS</a>
          </li>
          <li className="nav__menu--items">
            <a href="/">LEADERSHIP</a>
          </li>
          <li className="nav__menu--items">
            <a href="/">VIDEO</a>
          </li>
          <li className="nav__menu--items">
            <a href="/">NEWS</a>
          </li>
          <li className="nav__menu--items">
            <a href="/">FINANCE</a>
          </li>
          <li className="nav__menu--items">
            <a href="/">ENTERTAIMENT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
