import React from 'react';
import '../styles/components/Header.css';

function Header() {
    return(
      <header className="header">
        <nav className="header__nav">
          <div className="header__logo"> 
            <p className="header__logo--negro">Deck</p>
            <p className="header__logo--rojo">.</p>
          </div>
          <ul className="header__list">
            <li>Technology</li>
            <li>Ideas</li>
            <li>Leadership</li>
            <li>Video</li>
            <li>News</li>
            <li>Finance</li>
            <li>Entertainment</li>
          </ul>
          <img className="header__menu" src="../../resources/imgs/open-menu.png" alt="Menú" />
        </nav>
      </header>
    );
}

export default Header;