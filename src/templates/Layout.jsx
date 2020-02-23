import React from 'react';
import '../styles/templates/Layout.styl';
import Header from '../components/Header';
import Footer from '../components/Footer';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
