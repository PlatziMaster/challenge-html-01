/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';

import '../styles/components/Main.styl';
import Cart from './Cart';
import getData from '../utils/getData';

const Main = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getData();
      setImages(response);
      console.log(response);
      // ...
    }
    fetchData();
  }, []);

  return (
    <div className="Main">
      {images
        ? images.map(image => {
            return <Cart {...image} />;
          })
        : 'no hay imagenes'}
    </div>
  );
};

export default Main;
