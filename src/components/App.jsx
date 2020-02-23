import React from 'react';
import '../styles/components/App.styl';
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';

const App = () => {
  return (
    <>
      <Header />
      <Posts />
      <Footer />
    </>
  );
};

export default App;
