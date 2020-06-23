import React from 'react';
import '../styles/components/App.styl';

import Header from './Header';
import Footer from './Footer';
import Items from './Items';

const App = () => (
  <div className="app">
    <Header />
    <Items />
    <Footer />
  </div>
);

export default App;
