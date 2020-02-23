import React from 'react';
import Posts from './Posts';
import PostsMockedData from './mocks/postsMock.json';

const LandingPage = () => {
  return (
    <section className="container">
      <Posts posts={PostsMockedData} />
    </section>
  );
};

export default LandingPage;
