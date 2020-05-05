import React from 'react';
import Menu from './Menu';
import '../styles/components/Header.scss';


function Header(props) {

    /* function toggleMenu(){
        document.getElementById('menu').classList.toggle('active')
    } */

    return(
        <header className="header main__container">
            <p className="header__logo">Deck<span>.</span></p>
            <Menu />
            <a ><i class="header__icon fas fa-bars"></i></a>
            
        </header>
    )
}


export default Header;
