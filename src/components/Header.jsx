import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <>
      <section className="Header">
        <h1>
          Deck
          <span>.</span>
        </h1>

        <div className="Nav">
          <ul>
            <div className="Nav__links">
              <li>Technology</li>
              <li>Ideas</li>
              <li>Leadership</li>
              <li>Video</li>
              <li>News</li>
              <li>Finance</li>
              <li>Entertainment</li>
            </div>
          </ul>
        </div>
        <div className="Nav__menu">
          <img src="../images/menu-icon.png" alt="menu icon" />
        </div>
      </section>
    </>
  );
};

export default Header;
