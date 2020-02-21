import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/App.styl';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Spinner from '../resources/Spinner';

const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [, setIsError] = useState({ error: '' });

  useEffect(() => {
    const getData = () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = axios(
          'https://hn.algolia.com/api/v1/search?query=technology'
        );
        response
          .then(dataApi => {
            setData(dataApi.data.hits);
            setIsLoading(false);
          })
          .catch(err => {
            setIsError(err.message);
          });
      } catch (error) {
        setIsError(true);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header />

      {isLoading ? <Spinner /> : <Container {...data} />}

      <Footer />
    </>
  );
};

export default App;
