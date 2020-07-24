/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';

import '../styles/components/Header.styl';

import menuImg from '../../resources/imgs/menu.svg';
import logo from '../../resources/imgs/logo.png';

import URLS from './URLS';

class Header extends PureComponent {
  handleClick() {
    const menu = document.querySelector('.header__links--despegable');
    menu.classList.toggle('show-menu');
  }

  render() {
    return (
      <header className="header">
        <a href="/">
          <img src={logo} className="header__logo" alt="Logo" />
        </a>

        <nav className="header__links ">
          <ul>
            <li>
              <a href={URLS.technology} target="_blank" rel="noreferrer">
                TECHNOLOGY
              </a>
            </li>
            <li>
              <a href={URLS.ideas} target="_blank" rel="noreferrer">
                IDEAS
              </a>
            </li>
            <li>
              <a href={URLS.landership} target="_blank" rel="noreferrer">
                LANDERSHIP
              </a>
            </li>
            <li>
              <a href={URLS.video} target="_blank" rel="noreferrer">
                VIDEO
              </a>
            </li>
            <li>
              <a href={URLS.news} target="_blank" rel="noreferrer">
                NEWS
              </a>
            </li>
            <li>
              <a href={URLS.finance} target="_blank" rel="noreferrer">
                FINANCE
              </a>
            </li>
            <li>
              <a href={URLS.entretainment} target="_blank" rel="noreferrer">
                ENTRETAINMENT
              </a>
            </li>
          </ul>
        </nav>

        <nav className="header__links--despegable">
          <ul>
            <li>
              <a href={URLS.technology} target="_blank" rel="noreferrer">
                TECHNOLOGY
              </a>
            </li>
            <li>
              <a href={URLS.ideas} target="_blank" rel="noreferrer">
                IDEAS
              </a>
            </li>
            <li>
              <a href={URLS.landership} target="_blank" rel="noreferrer">
                LANDERSHIP
              </a>
            </li>
            <li>
              <a href={URLS.video} target="_blank" rel="noreferrer">
                VIDEO
              </a>
            </li>
            <li>
              <a href={URLS.news} target="_blank" rel="noreferrer">
                NEWS
              </a>
            </li>
            <li>
              <a href={URLS.finance} target="_blank" rel="noreferrer">
                FINANCE
              </a>
            </li>
            <li>
              <a href={URLS.entretainment} target="_blank" rel="noreferrer">
                ENTRETAINMENT
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={this.handleClick}
          className="header__menu"
          type="button"
        >
          <img
            className="header__menu--img"
            id="burger-menu"
            src={menuImg}
            alt="Burger Menu"
          />
        </button>
      </header>
    );
  }
}

export default Header;
