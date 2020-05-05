import React from 'react';
import '../styles/components/Menu_footer.scss';

function Menu_footer(props) {
    return(
        <nav className="menufooter">
            <ul className="menufooter__ul">
                <li className="menufooter__ul__list"><a href="#">Technology</a></li>
                <li className="menufooter__ul__list"><a href="#">Ideas</a></li>
                <li className="menufooter__ul__list"><a href="#">Leadership</a></li>
                <li className="menufooter__ul__list"><a href="#">Video</a></li>
                <li className="menufooter__ul__list"><a href="#">News</a></li>
                <li className="menufooter__ul__list"><a href="#">Finance</a></li>
                <li className="menufooter__ul__list"><a href="#">Entertinment</a></li>
            </ul>
        </nav>
    )
}

export default Menu_footer;