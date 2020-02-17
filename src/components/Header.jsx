import React from 'react';
import '../styles/components/Header.styl';
import Nav from './Nav';

function Header() {
  const ipad = window.matchMedia('screen and (max-width: 767px)');
  const menu = document.querySelector('.menu');
  const burgerButton = document.querySelector('#burger-menu');

  const hideShow = () => {
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
    } else {
      menu.classList.add('is-active');
    }
  };

  const validation = (event) => {
    if (event.matches) {
      burgerButton.addEventListener('click', hideShow);
    } else {
      burgerButton.removeEventListener('click', hideShow);
    }
  };

  ipad.addEventListener(validation);

  return (
    <div className="Header">
      <figure className="Header__logoFigure">
        <img className="Header__logo" src="" alt="" />
      </figure>
      <Nav className="Menu" />
      <span className="icon-menu" />
    </div>
  );
}

export default Header;
