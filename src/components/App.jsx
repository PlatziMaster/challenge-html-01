import React from 'react';
import '../styles/components/App.styl';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
