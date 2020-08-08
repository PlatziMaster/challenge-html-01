import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InitialState from '../inicialState';
import iconHamburger from '../assets/icons/hamburger.svg';
import iconClose from '../assets/icons/close.svg';

const Header = () => {
  const [menu, setMenu] = useState(window.screen.width > 959);
  const viewScreen = () =>
    window.addEventListener('resize', () =>
      window.screen.width > 959 ? setMenu(true) : setMenu(false)
    );

  viewScreen();

  const viewMenu = () =>
    window.screen.width < 959 && (menu ? setMenu(false) : setMenu(true));
  const viewMenuHamburger = () => (menu ? setMenu(false) : setMenu(true));
  return (
    <header>
      <Link to="/">
        <h1>
          Deck
          <span>.</span>
        </h1>
      </Link>
      <div
        className="HamburgerMenu"
        role="menu"
        onKeyPress={() => {}}
        onClick={() => viewMenuHamburger()}
        tabIndex={0}
      >
        <img src={iconHamburger} alt="menu hamburger" />
      </div>
      {menu && (
        <nav>
          <div
            className="HamburgerMenu"
            role="menu"
            onKeyPress={() => {}}
            onClick={() => viewMenu()}
            tabIndex={0}
          >
            <img src={iconClose} alt="menu close" />
          </div>
          <ul>
            {InitialState.tags.map(item => (
              <Link
                to={item.url}
                key={item.id}
                onClick={() => {
                  viewMenu();
                }}
              >
                <li>{item.name.toLocaleUpperCase()}</li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
