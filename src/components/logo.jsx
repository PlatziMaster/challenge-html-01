import React from 'react';
import imgLight from '../assets/images/logo.png';
import imgBlack from '../assets/images/logo-black.png';

const Logo = ({ theme = 'light' }) => {
  let img;
  if (theme === 'dark') {
    img = imgBlack;
  } else {
    img = imgLight;
  }
  return <img src={img} width="60px" alt="Logo" />;
};

export default Logo;
