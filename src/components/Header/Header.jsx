import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import '../../styles/components/Header/_header.styl';

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="headerContainer-image">
        <img src="../../../resources/imgs/logo.png" alt="imagen" />
      </div>
      <nav className="headerContainer_nav">
        <ul className="headerContainer_nav-list">
          <li className="element">TECHNOLOGY</li>
          <li className="element">IDEAS</li>
          <li className="element">LEADERSHIP</li>
          <li className="element">VIDEO</li>
          <li className="element">NEWS</li>
          <li className="element">FINANCE</li>
          <li className="element">ENTERTAINMENT</li>
        </ul>
      </nav>
      <div className="headerContainer-menu">
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
