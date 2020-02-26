import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='nav__item'>
        Technology
      </Link>
      <Link to='/' className='nav__item'>
        Ideas
      </Link>
      <Link to='/' className='nav__item'>
        Leadership
      </Link>
      <Link to='/' className='nav__item'>
        Video
      </Link>
      <Link to='/' className='nav__item'>
        News
      </Link>
      <Link to='/' className='nav__item'>
        Finance
      </Link>
      <Link to='/' className='nav__item'>
        Entertainment
      </Link>
    </nav>
  );
};

export default Nav;
