import React from 'react';
import InputSubscribe from './InputSubscribe';
import IconInstagram from '../../resources/imgs/socialMedia/camera-retro-solid.svg';
import IconPinterest from '../../resources/imgs/socialMedia/pinterest-p-brands.svg';
import IconTwitter from '../../resources/imgs/socialMedia/twitter-brands.svg';
import IconFacebook from '../../resources/imgs/socialMedia/facebook-f-brands.svg';

const FollowUs = () => {
  return (
    <div className='followUs'>
      <div className='followUs__email'>
        <InputSubscribe text='subscribe' />
      </div>
      <div className='followUs__social-media social-media-icons'>
        <p className='social-media-icons__callAction'>Follow us: </p>
        <img
          className='social-media-icons__icon'
          src={IconInstagram}
          alt='Instagram Icon'
        />
        <img
          className='social-media-icons__icon'
          src={IconPinterest}
          alt='Pinterest Icon'
        />
        <img
          className='social-media-icons__icon'
          src={IconTwitter}
          alt='Twitter Icon'
        />
        <img
          className='social-media-icons__icon'
          src={IconFacebook}
          alt='Facebook Icon'
        />
      </div>
    </div>
  );
};

export default FollowUs;
