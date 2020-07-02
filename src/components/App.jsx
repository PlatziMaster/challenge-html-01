import React from 'react';
import '../styles/components/App.styl';
import '../styles/components/media.styl';
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout';

const App = () => (
  <React.Fragment>
    <Header />
    <Layout />
    <Footer />
  </React.Fragment>
)

export default App;
