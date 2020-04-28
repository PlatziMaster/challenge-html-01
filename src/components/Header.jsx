import React from 'react';

// import navIcon from '';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__nav--title">
          Deck
          <span>.</span>
        </h1>
        <ul>
          <li>Technology</li>
          <li>Ideas</li>
          <li>Leadership</li>
          <li>Video</li>
          <li>News</li>
          <li>Finance</li>
          <li>Entertainment</li>
        </ul>
      </nav>
      <div className="header__nav--icon">
        <img src="../../resources/imgs/iconfinder_menu-alt_134216.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
