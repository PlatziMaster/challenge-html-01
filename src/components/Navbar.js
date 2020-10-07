import React from 'react';
import '../styles/components/Navbar.css';


class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <figure>
                    <img src="../imgs/logo.png"  width="80px" height="25px" alt="logo"/>
                </figure>
                <div className="Navbar__container" >
                    <ul className="Navbar__ul">
                        <li className="Navbar__li">
                            <a className="Navbar__li-a" href="/">TECHNOLOGY</a>
                        </li>
                        <li className="Navbar__li">
                            <a className="Navbar__li-a" href="/">IDEAS</a>
                        </li>
                        <li className="Navbar__li">
                            <a className="Navbar__li-a" href="/">LEADERSHIP</a>
                        </li>
                        <li className="Navbar__li">
                            <a className="Navbar__li-a"href="/">VIDEO</a>
                        </li>
                        <li className="Navbar__li">
                            <a className="Navbar__li-a" href="/">NEWS</a>
                        </li>
                        <li className="Navbar__li">
                            <a className="Navbar__li-a" href="/">FINANCE</a>
                        </li>
                        <li className="Navbar__li">
                            <a className="Navbar__li-a" href="/">ENTERTAINMENT</a>
                        </li>
                    </ul>
                </div>
                <figure className="Navbar__menu">
                    <a href="/" >
                        <img src="../imgs/menu.png" width="50px" height="50px" alt="menu"/>
                    </a>
                </figure>
            </div>
        );
    }
}

export default Navbar;
