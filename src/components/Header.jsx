import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BurgerButton from '../icons/BurgerButton';
import '../styles/components/Header.styl';

import logo from '../assets/logo.png';

const mobileNavOpenBurgerStyles = {
  fill: 'white',
  position: 'fixed',
  right: '5vw',
  top: '10px',
};

const mobileNavOpenHeaderStyles = { paddingTop: '15px', marginBottom: '35px' };

const Header = ({ sections }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const isMobileNavOpenHandler = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <header
      className="header__container"
      style={isMobileNavOpen ? mobileNavOpenHeaderStyles : null}
    >
      <img className="header__img--logo" alt="Logo" src={logo} />
      {sections.map(section => (
        <a key={section} href="/" className="header__section">
          {section}
        </a>
      ))}
      {isMobileNavOpen && (
        <div className="header__sections-container--mobile">
          {sections.map(section => (
            <a
              key={section}
              href="/"
              className="header__sections-container__section--mobile"
            >
              {section}
            </a>
          ))}
        </div>
      )}
      <div className="header__flex-grow" />
      <BurgerButton
        onClick={isMobileNavOpenHandler}
        style={isMobileNavOpen ? mobileNavOpenBurgerStyles : null}
      />
    </header>
  );
};

Header.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
