import React, { useState } from 'react';
import '../styles/components/Header.styl';
import Nav from './Nav';
import HamburgerButton from './HamburgerButton';
import Logo from '../../images/Logo.png';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = (event) => {
    event.preventDefault();
    const element = document.querySelector('.Nav');
    element.classList.toggle('isActive');
    // if (isActive) {
    //   setIsActive(false)
    // } else {
    //   setIsActive(true)
    // }
    setIsActive(!isActive);
    // $nav.classList.toggle('isActive');
  };

  return (
    <>
      <div className="Header">
        <figure className="Header__logoFigure">
          <img src={Logo} alt="" />
        </figure>

        <Nav className="Menu" />
        <div className="Hamburger">
          <HamburgerButton
            className="HamburgerButton"
            onClick={handleHamburgerClick}
            isActive={isActive}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
