import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.styl';

const Header = () => {
  let handler = false;
  const [showClass, setClass] = useState('hide');

  function showMenu(e) {
    handler = !handler;
    setClass(showClass === 'hide' ? 'show' : 'hide');
    e.preventDefault();
  }

  return (
    <header>
      <nav>
        <li className="logocolor logo">Deck</li>
        <menu className={showClass}>
          <li>
            <Link className="item" to="/">
              Technology
            </Link>
          </li>
          <li>
            <Link className="item" to="/">
              Ideas
            </Link>
          </li>
          <li>
            <Link className="item" to="/">
              Ideas
            </Link>
          </li>
          <li>
            <Link className="item" to="/">
              Leadership
            </Link>
          </li>
          <li>
            <Link className="item" to="/">
              Video
            </Link>
          </li>
          <li>
            <Link className="item" to="/">
              News
            </Link>
          </li>
          <li>
            <Link className="item" to="/">
              Finance
            </Link>
          </li>
          <li>
            <Link className="item" to="/">
              Entertainment
            </Link>
          </li>
        </menu>
        <button
          type="button"
          className="burger"
          onClick={showMenu}
          onKeyDown={showMenu}
        >
          &#9776;
        </button>
      </nav>
    </header>
  );
};

export default Header;
