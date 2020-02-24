/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo';

import '../styles/components/Header.styl';
import '../styles/components/Menu.styl';

const Header = () => (
  <header>
    <nav className="container">
      <div className="logo">
        <Logo />
      </div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <menu>
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
      </menu>
    </nav>
  </header>
);

export default Header;
