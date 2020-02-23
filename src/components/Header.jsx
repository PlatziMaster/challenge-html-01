/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">Deck.</div>
      <div className="Header__nav">
        <label htmlFor="toggle"> &#9776;</label>
        <input type="checkbox" id="toggle" />
        <menu className="Header__menu">
          <li>
            <a href="./">Technology</a>
          </li>
          <li>
            <a href="./">Ideas</a>
          </li>
          <li>
            <a href="./">Leadership</a>
          </li>
          <li>
            <a href="./">Video</a>
          </li>
          <li>
            <a href="./">News</a>
          </li>
          <li>
            <a href="./">Finance</a>
          </li>
          <li>
            <a href="./">Entertainment</a>
          </li>
        </menu>
      </div>
    </div>
  );
};

export default Header;
