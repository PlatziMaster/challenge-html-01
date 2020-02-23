import React from 'react';

import testImage from '../../resources/imgs/crew-22235.png';

const Home = () => {
  return (
    <main className='homeContainer'>
      <h1>Este es el main</h1>
      <a href='/'>Pos si</a>
      <br />
      <small>Hola</small>
      <br />
      <img src={testImage} alt='Foo eating a sandwich.' />
    </main>
  );
};

export default Home;
