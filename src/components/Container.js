import React from 'react';
import Header from './Header';
import Cards from './Cards';

import '../styles/components/Container.styl';
import Foorter from './Footer';

const Container = () => {
  return (
    <React.Fragment>
      <Header />
      <Cards />
      <Foorter />
    </React.Fragment>
  );
};

export default Container;
