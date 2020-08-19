import React from 'react';

import '../styles/components/App.styl';
import Item from './Item';
import Item2 from './Item2';
import Item3 from './Item3';
import Item4 from './Item4';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <Item />
      <Item3 />
      <Item2 />
      <Item4 />
      <Item3 />
      <Item />
      <Item3 />
      <Item2 />
      <Item4 />
      <Item2 />
      <Item4 />
    </div>
    <Footer />
  </>
);

export default App;
