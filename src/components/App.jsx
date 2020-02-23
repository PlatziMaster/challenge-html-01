import React from 'react';
import Header from './Header';
import Footer from './Footer';
import data from '../data';
import Products from './Products';
import ProductItem from './ProductItem';
import '../styles/components/App.styl';

const App = () => (
  <>
    <Header />
    <Products>
      {data.products.map(({ id, ...products }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProductItem key={id} {...products} />
      ))}
    </Products>
    <Footer />
  </>
);

export default App;
