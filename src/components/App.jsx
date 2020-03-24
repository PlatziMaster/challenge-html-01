import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import Header from './Header';
import '../styles/components/App.css';
import Main from './Main';
import BlogItem from './BlogItem';
import Footer from './Footer';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        {blogs.blogs !== undefined &&
          blogs.blogs.map(item => <BlogItem key={item.id} {...item} />)}
      </Main>
      <Footer />
    </>
  );
};

export default App;
