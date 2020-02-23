import React from 'react';
import '../styles/components/Header.styl';
import Logo from '../../resources/imgs/LogoHeader.png';
import MenuIcon from '../../resources/imgs/Menu-icon.png';

const Header = () => {
  return (
    <div className="header">
      <figure className="header__img">
        <img src={Logo} alt="" />
      </figure>
      <nav className="nav" id="nav">
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
      <img src={MenuIcon} alt="Menu" className="header__hamburger-icon" />
    </div>
  );
};

export default Header;
