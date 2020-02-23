import React from 'react';
import Logo from './Logo';
import InputSubscribe from './InputSubscribe';
import Nav from './Nav';
import IconInstagram from '../../resources/imgs/socialMedia/camera-retro-solid.svg';
import IconPinterest from '../../resources/imgs/socialMedia/pinterest-p-brands.svg';
import IconTwitter from '../../resources/imgs/socialMedia/twitter-brands.svg';
import IconFacebook from '../../resources/imgs/socialMedia/facebook-f-brands.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo />

      <div className='copyright-label'>
        <p className='copyright-label__p1'>© 2018 Deck</p>
        <p className='copyright-label__p2'>Component based UI Kit</p>
      </div>

      <InputSubscribe text='subscribe' />

      <div className='social-media'>
        <p className='social-media__text'>Follow us: </p>
        <img
          className='social-media__img'
          src={IconInstagram}
          alt='Icon of Instagram'
        />
        <img
          className='social-media__img'
          src={IconPinterest}
          alt='Icon of Pinterest'
        />
        <img
          className='social-media__img'
          src={IconTwitter}
          alt='Icon of Twitter'
        />
        <img
          className='social-media__img'
          src={IconFacebook}
          alt='Icon of Facebook'
        />
      </div>

      <Nav />
    </footer>
  );
};

export default Footer;
