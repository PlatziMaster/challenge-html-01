import React from 'react';
import '../styles/components/Header.css';

const Header = () => (
  <div className="header">
    <a className="header-logo" href="/">
      <img src="../../resources/imgs/Logo.png" alt="logo" />
    </a>
    <nav className="header-menu">
      <label htmlFor="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <menu className="header-menu__items">
        <li>
          <a href="/">TECHNOLOGY</a>
        </li>
        <li>
          <a href="/">IDEAS</a>
        </li>
        <li>
          <a href="/">LEADERSHIP</a>
        </li>
        <li>
          <a href="/">VIDEO</a>
        </li>
        <li>
          <a href="/">NEWS</a>
        </li>
        <li>
          <a href="/">FINANCE</a>
        </li>
        <li>
          <a href="/">ENTERTAINMENT</a>
        </li>
      </menu>
    </nav>
  </div>
);

export default Header;
