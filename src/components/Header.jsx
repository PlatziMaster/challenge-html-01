import React from 'react';
import PropTypes from 'prop-types';
import BurgerButton from '../icons/BurgerButton';
import '../styles/components/Header.styl';

import logo from '../assets/logo.png';

const Header = ({ sections }) => {
  return (
    <header className="header__container">
      <img className="header__img--logo" alt="Logo" src={logo} />
      {sections.map(section => (
        <a key={section} href="/" className="header__section">
          {section}
        </a>
      ))}
      <div className="header__flex-grow" />
      <BurgerButton />
    </header>
  );
};

Header.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
