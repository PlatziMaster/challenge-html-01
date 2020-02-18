import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/technology">TECHNOLOGY</Link>
          </li>
          <li>
            <Link to="/ideas">IDEAS</Link>
          </li>
          <li>
            <Link to="/leadership">LEADERSHIP</Link>
          </li>
          <li>
            <Link to="/video">VIDEO</Link>
          </li>
          <li>
            <Link to="/news">NEWS</Link>
          </li>
          <li>
            <Link to="/finance">FINANCE</Link>
          </li>
          <li>
            <Link to="/entertainment">ENTERTAINMENT</Link>
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
