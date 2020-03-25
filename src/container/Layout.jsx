import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
