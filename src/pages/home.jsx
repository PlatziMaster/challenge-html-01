import React from 'react';
import HomeLayout from '../layouts/home-layout';
import Post from '../components/post';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';

const data = [
  {
    img: img1,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img2,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img3,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img4,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img5,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img1,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img2,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img3,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img4,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img5,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img1,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img2,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img3,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img4,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img5,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img1,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img2,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img3,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img4,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
  {
    img: img5,
    title: 'Using Banners Will Increase Trade Show Traffic',
    text:
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
    category: 'Technology',
  },
];

const Home = () => (
  <HomeLayout>
    <div className="container">
      {data.map(value => {
        return <Post img={value.img} title={value.title} text={value.text} />;
      })}
    </div>
  </HomeLayout>
);

export default Home;
