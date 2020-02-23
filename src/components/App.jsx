import React from 'react';
import '../styles/components/App.styl';
import '../styles/components/App.sass';
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
