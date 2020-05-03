import React from 'react';
import Menu from './Menu';
import '../styles/components/Header.scss';

function Header(props) {
    return(
        <header className="Header main__container">
            <p className="Header__logo">Deck<span>.</span></p>
            <Menu />
            <img className="Header__icon" src="../../resources/icons/menu-hamburger.svg" />
            
            
        </header>
    )
}

export default Header;
