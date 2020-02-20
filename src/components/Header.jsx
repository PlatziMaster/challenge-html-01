import React from 'react';
import '../styles/components/Header.styl';
import Logo from '../../resources/imgs/Logo.png';

const Header = () => (
  <div className="Header">
    <figure className="Header__logoFigure">
      <img src={Logo} alt="" />
    </figure>
    <nav className="Nav" id="Nav">
      <ul className="Nav__list">
        <li className="Nav_element">
          <a href="/">TECHNOLOGY</a>
        </li>
        <li className="Nav_element">
          <a href="/">IDEAS</a>
        </li>
        <li className="Nav_element">
          <a href="/">LEADERSHIP</a>
        </li>
        <li className="Nav_element">
          <a href="/">VIDEO</a>
        </li>
        <li className="Nav_element">
          <a href="/">NEWS</a>
        </li>
        <li className="Nav_element">
          <a href="/">FINANCE</a>
        </li>
        <li className="Nav_element">
          <a href="/">ENTERTAIMENT</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
