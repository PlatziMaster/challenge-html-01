import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import '../styles/components/App.styl';

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
