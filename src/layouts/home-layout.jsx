import React from 'react';
import Header from '../components/header';
import Footer from '../components/fotter';

const HomeLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default HomeLayout;
