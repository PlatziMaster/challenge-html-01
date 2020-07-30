import React from 'react';
import Header from './Header';
import News from './News';
import Footer from './Footer';

import '../styles/components/App.styl';

const App = () => {
  return (
    <div className="App">
      <Header />
      <News />
      <Footer />
    </div>
  );
};

export default App;
