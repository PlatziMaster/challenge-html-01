import React from "react";
import "../assets/styles/components/Header.styl";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <span className="header__logo--color1">Deck</span>
        <span className="header__logo--color2">.</span>
      </div>
      <nav>
        <img
          className="header--button-close"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+CiAgICA8cGF0aCBkPSJNMTEuNTQ1IDExLjU0NUwyLjIyNyAyLjIyN00yLjQ1NSAxMS41NDVsOS4yNy05LjI3Ii8+CiAgPC9nPgo8L3N2Zz4K"
          alt=""
        />
        <ul>
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
        </ul>
      </nav>
      <label className="nav__icon" htmlFor="toggle">
        <input type="checkbox" id="toggle" />
        &#9776;
      </label>
    </header>
  );
};

export default Header;
