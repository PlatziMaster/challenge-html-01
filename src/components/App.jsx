import React from 'react';
import '../styles/components/App.styl';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
