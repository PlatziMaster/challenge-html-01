import React, { useState } from 'react';
import iconHamburger from '../assets/icons/hamburger.svg';
import iconClose from '../assets/icons/close.svg';

const Header = () => {
  const [menu, setMenu] = useState(window.screen.width > 959);
  const viewScreen = () =>
    window.addEventListener('resize', () =>
      window.screen.width > 959 ? setMenu(true) : setMenu(false)
    );

  viewScreen();
  const viewMenu = () => (menu ? setMenu(false) : setMenu(true));
  return (
    <header>
      <h1>
        Deck
        <span>.</span>
      </h1>
      <div
        className="HamburgerMenu"
        role="menu"
        onKeyPress={() => {}}
        onClick={() => viewMenu()}
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
            <li>TECHNOLOGY</li>
            <li>IDEAS</li>
            <li>LEADERSHIP</li>
            <li>VIDEO</li>
            <li>NEWS</li>
            <li>FINANCE</li>
            <li>ENTERTAINMENT</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
