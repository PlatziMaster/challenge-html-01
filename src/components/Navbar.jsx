import React from 'react';
import '../styles/components/Navbar.css';

const NavBar = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav--logo">
          <a href="./index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="29"
              viewBox="0 0 60 29"
            >
              <g id="Logo" transform="translate(0 -1)">
                <text
                  id="Deck"
                  transform="translate(0 25)"
                  fill="#1d1f24"
                  fontSize="24"
                  fontFamily="Lato-Bold, Lato"
                  fontWeight="700"
                  letterSpacing="-0.015em"
                >
                  <tspan x="0" y="0">
                    Deck
                  </tspan>
                </text>
                <g
                  id="Element_Shape"
                  data-name="Element / Shape"
                  transform="translate(56 20)"
                >
                  <rect id="Background" width="4" height="4" fill="#ff565c" />
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div className="header__nav--menu">
          <ul>
            <li>
              <a href="./index.html">Technology</a>
            </li>
            <li>
              <a href="./index.html">Ideas</a>
            </li>
            <li>
              <a href="./index.html">Leadership</a>
            </li>
            <li>
              <a href="./index.html">Video</a>
            </li>
            <li>
              <a href="./index.html">News</a>
            </li>
            <li>
              <a href="./index.html">Finance</a>
            </li>
            <li>
              <a href="./index.html">Entertainment</a>
            </li>
          </ul>
        </div>
        <div className="header__nav--menu-responsive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="16"
            viewBox="0 0 27 16"
          >
            <path
              id="Menu_icon"
              data-name="Menu icon"
              d="M0,16V14H27v2ZM0,9V7H27V9ZM0,2V0H27V2Z"
              fill="#1d1f24"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
