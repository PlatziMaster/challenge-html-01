import React from 'react';
import Logo from './logo';
import Toggle from './toggle';

const Header = () => (
  <header>
    <nav className="container">
      <div className="logo">
        <Logo />
      </div>
      <div className="menu-container">
        <ul id="top-menu">
          <li>
            <a>TECHNOLOGY</a>
          </li>
          <li>
            <a>IDEAS</a>
          </li>
          <li>
            <a>LEADERSHIP</a>
          </li>
          <li>
            <a>VIDEO</a>
          </li>
          <li>
            <a>NEWS</a>
          </li>
          <li>
            <a>FINANCE</a>
          </li>
          <li>
            <a>ENTERTAINMENT</a>
          </li>
        </ul>
      </div>
      <div className="toggle">
        <label htmlFor="toggle-checkbox">
          <input type="checkbox" id="toggle-checkbox" />
          <Toggle />
        </label>
      </div>
    </nav>
  </header>
);

export default Header;
