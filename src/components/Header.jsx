import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <section className="Header">
      <div className="Header__nav">
        <h1>
          Deck
          <span>.</span>
        </h1>
        <a href="/">Technology</a>
        <a href="/">Ideas</a>
        <a href="/">Leadership</a>
        <a href="/">Video</a>
        <a href="/">News</a>
        <a href="/">Finance</a>
        <a href="/">Entertainment</a>
      </div>
      <div className="Header__nav--icon">
        <i>&#9776;</i>
      </div>
    </section>
  );
};

export default Header;
