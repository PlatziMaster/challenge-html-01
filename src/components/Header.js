import React from 'react';
import '../styles/components/Header.css';

import menuIcon from './icons/icons8-menu.svg';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header--divideMenu">
          <h1>
            Deck
            <span>.</span>
          </h1>
          <ul className="header--list">
            <li>technology</li>
            <li>Ideas</li>
            <li>Leadership</li>
            <li>Video</li>
            <li>News</li>
            <li>Finance</li>
            <li>Entertainment</li>
          </ul>
        </div>
        <img src={menuIcon} className="header--menu" alt="menu" />
      </header>
    </>
  );
};

export default Header;
