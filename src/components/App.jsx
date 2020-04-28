import React from 'react';
import '../styles/components/App.styl';

// Componentes
import Header from './Header';
import Cards from './Cards';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
