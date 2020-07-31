import React from 'react';
import burguerMenu from '../img/burguer.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2>Logo</h2> 
        {' '}
        <div className="bullet" />
      </div>
      <div className="navbar__list">
        <p className="navbar__item">technology</p>
        <p className="navbar__item">ideas</p>
        <p className="navbar__item">leadership</p>
        <p className="navbar__item">video</p>
        <p className="navbar__item">news</p>
        <p className="navbar__item">finance</p>
        <p className="navbar__item">entertainment</p>
      </div>
      <div id="burguer" className="burguer">
        <img src={burguerMenu} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
