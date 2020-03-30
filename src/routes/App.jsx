import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/Products';
import '../styles/global/global.styl';

const App = () => {
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
};

export default App;
