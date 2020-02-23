import React from 'react';
import '../styles/pages/Home.styl';
import ListOfProductCards from '../components/ListOfProductCards';
import products from '../__mocks__/products.json';

function Home() {
  return <ListOfProductCards products={products} />;
}

export default Home;
