import React from 'react';
import '../styles/components/Nav.styl';

function Nav() {
  return (
    <nav className="Nav">
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
  );
}

export default Nav;
