import React from 'react';
import '../styles/components/Header.styl';
import HamburgerIcon from '../../resources/imgs/hamburger_icon.png';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        Deck
        <p>.</p>
      </div>
      <div className="Header__nav">
        <ul>
          <li>Techology</li>
          <li>Ideas</li>
          <li>Leadership</li>
          <li>Video</li>
          <li>News</li>
          <li>Finance</li>
          <li>Entertainment</li>
        </ul>
      </div>
      <div className="Header__hamburger">
        <img src={HamburgerIcon} alt="" />
      </div>
    </div>
  );
};
export default Header;
