import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/App.styl';

const App = () => (
  <div className="Main">
    <Header />
    <h1>Hello React!</h1>
    <Footer />
  </div>
);

export default App;
