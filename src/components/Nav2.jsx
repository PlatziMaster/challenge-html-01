import React from 'react';
import '../styles/components/Nav2.styl';

function Nav2() {
  return (
    <nav className="Nav2">
      <ul className="Nav2__list">
        <li className="Nav2_element">
          <a href="/">TECHNOLOGY</a>
        </li>
        <li className="Nav2_element">
          <a href="/">IDEAS</a>
        </li>
        <li className="Nav2_element">
          <a href="/">LEADERSHIP</a>
        </li>
      </ul>
      <ul className="Nav2__list">
        <li className="Nav2_element">
          <a href="/">VIDEO</a>
        </li>
        <li className="Nav2_element">
          <a href="/">NEWS</a>
        </li>
        <li className="Nav2_element">
          <a href="/">FINANCE</a>
        </li>
        <li className="Nav2_element">
          <a href="/">ENTERTAIMENT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav2;
