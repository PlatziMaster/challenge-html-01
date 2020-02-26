import React from 'react';
import Copyright from './Copyright';
import FollowUs from './FollowUs';
import Nav from './Nav';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__copyright'>
        <Copyright />
      </div>

      <div className='footer__social-media'>
        <FollowUs />
      </div>

      <div className='footer__nav'>
        <Nav />
      </div>
    </footer>
  );
};

export default Footer;
