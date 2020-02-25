import React from 'react';
import Logo from './Logo';

const Copyright = () => {
  return (
    <div className='copyright'>
      <div className='copyright__logo'>
        <Logo />
      </div>
      <p className='copyright__label-p1'>© 2018 Deck</p>
      <p className='copyright__label-p2'>Component based UI Kit</p>
    </div>
  );
};

export default Copyright;
