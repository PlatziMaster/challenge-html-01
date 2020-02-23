import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <header Class="header">
      <div Class="header__logo">
        <p>
          Deck
          <font color="red">.</font>
        </p>
      </div>
      <ul Class="header__options">
        <li>
          <a href="">Technology</a>
        </li>
        <li>
          <a href="">Ideas</a>
        </li>
        <li>
          <a href="">Leadership</a>
        </li>
        <li>
          <a href="">Video</a>
        </li>
        <li>
          <a href="">News</a>
        </li>
        <li>
          <a href="">Finance</a>
        </li>
        <li>
          <a href="">Entertaiment</a>
        </li>
      </ul>
      <div Class="header__menu">
        <img src="/resources/imgs/menu (1).svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
