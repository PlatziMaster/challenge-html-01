import React from 'react';
import '../styles/components/Menu.scss';

function Menu(props) {
    return(
        <nav className="menu" id="menu">
            <ul>
                <li className="menu__list"><a href="#">Technology</a></li>
                <li className="menu__list"><a href="#">Ideas</a></li>
                <li className="menu__list"><a href="#">Leadership</a></li>
                <li className="menu__list"><a href="#">Video</a></li>
                <li className="menu__list"><a href="#">News</a></li>
                <li className="menu__list"><a href="#">Finance</a></li>
                <li className="menu__list"><a href="#">Entertinment</a></li>
            </ul>
        </nav>
    )
}

export default Menu;