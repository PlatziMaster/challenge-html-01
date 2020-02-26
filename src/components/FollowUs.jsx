import React from 'react';
import InputSubscribe from './InputSubscribe';

const FollowUs = () => {
  return (
    <div className='followUs'>
      <div className='followUs__email'>
        <InputSubscribe text='subscribe' />
      </div>
      <div className='followUs__social-media social-media-icons'>
        <p className='social-media-icons__callAction'>Follow us: </p>
        <i className='fab fa-instagram social-media-icons__icon' />
        <i className='fab fa-pinterest-p social-media-icons__icon' />
        <i className='fab fa-twitter social-media-icons__icon' />
        <i className='fab fa-facebook-f social-media-icons__icon' />
      </div>
    </div>
  );
};

export default FollowUs;
