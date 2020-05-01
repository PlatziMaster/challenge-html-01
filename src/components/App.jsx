import React from 'react';
import '../styles/components/App.css';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => (
  <div className="container">
    <Header />
    <Content />
    <Footer />
  </div>
);

export default App;
