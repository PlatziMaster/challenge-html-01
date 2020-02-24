import React, { useState } from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-brand">
          <h1>
            <img src="/resources/imgs/logo.png" alt="" />
            Deck.
          </h1>
        </div>

        <ul className="nav-primaryOptions">
          <li role="menuitem">
            <a href="http://platzi.com">Section 1</a>
          </li>
          <li role="menuitem">
            <a href="http://platzi.com">Section 2</a>
          </li>
          <li role="menuitem">
            <a href="http://platzi.com">Section 3</a>
          </li>
          <li role="menuitem">
            <a href="http://platzi.com">Section 4</a>
          </li>
          <li role="menuitem">
            <a href="http://platzi.com">Section 5</a>
          </li>
          <li role="menuitem">
            <a href="http://platzi.com">Section 6</a>
          </li>
          <li role="menuitem">
            <a href="http://platzi.com">Section 7</a>
          </li>
        </ul>

        <div className="nav-sidebar" role="navigation">
          <div
            className="nav-burguer"
            onClick={() => setIsActive(!isActive)}
            role="button"
            tabIndex={0}
            onKeyDown={() => setIsActive(!isActive)}
          >
            <i className="fas fa-bars" />
          </div>
          <div
            className={
              isActive ? 'nav-sidebar-content is-active' : 'nav-sidebar-content'
            }
          >
            <ul className="nav-primaryOptions">
              <li role="menuitem">
                <a href="http://platzi.com">Section 1</a>
              </li>
              <li role="menuitem">
                <a href="http://platzi.com">Section 2</a>
              </li>
              <li role="menuitem">
                <a href="http://platzi.com">Section 3</a>
              </li>
              <li role="menuitem">
                <a href="http://platzi.com">Section 4</a>
              </li>
              <li role="menuitem">
                <a href="http://platzi.com">Section 5</a>
              </li>
              <li role="menuitem">
                <a href="http://platzi.com">Section 6</a>
              </li>
              <li role="menuitem">
                <a href="http://platzi.com">Section 7</a>
              </li>
            </ul>
            <ul className="nav-secondaryOptions">
              <li role="menuitem">
                <a href="http://platzi.com">Section secondary 1</a>
              </li>
              <li role="menuitem">
                <a href="http://platzi.com">Section secondary 2</a>
              </li>
              <li role="menuitem">
                <a href="http://platzi.com">Section secondary 3</a>
              </li>
              <li role="menuitem">
                <a href="http://platzi.com">Section secondary 4</a>
              </li>
              <li role="menuitem">
                <a href="http://platzi.com">Section secondary 5</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
