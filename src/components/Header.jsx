/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import '../styles/components/Header.styl';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        Deck
        <p>.</p>
      </div>
      <div className="Header__navbar">
        <ul>
          <li>Techology</li>
          <li>Ideas</li>
          <li>Leadership</li>
          <li>Video</li>
          <li>News</li>
          <li>Entertainment</li>
        </ul>
      </div>
      <div className="Header__hamburgerMenu">
        <i className="fas fa-bars" />
      </div>
    </div>
  );
};
export default Header;
