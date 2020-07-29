import React from 'react';
import Header from './Header';
import News from './News';
import '../styles/components/App.styl';

const App = () => {
  return (
    <div className="App">
      <Header />
      <News />
    </div>
  );
};

export default App;
