/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import '../styles/components/AppContainer.styl';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const AppContainer = () => {
  return (
    <div className="appContainer">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default AppContainer;
