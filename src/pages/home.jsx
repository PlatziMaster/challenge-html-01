/* eslint-disable react/no-array-index-key */
import React from 'react';
import HomeLayout from '../layouts/home-layout';
import Post from '../components/post';
import data from '../data/post';

const Home = () => (
  <HomeLayout>
    <div className="container">
      {data.map((value, index) => {
        return (
          <Post
            key={index}
            img={value.img}
            title={value.title}
            text={value.text}
            category={value.category}
          />
        );
      })}
    </div>
  </HomeLayout>
);

export default Home;
