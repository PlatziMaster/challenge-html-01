import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/fotter';

const HomeLayout = ({ children }) => (
  <Router>
    <Header />
    <main>{children}</main>
    <Footer />
  </Router>
);

export default HomeLayout;
