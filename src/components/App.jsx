import React from 'react';
// import '../styles/components/App.styl';

import Header from './Header';
import Articles from './Articles';
import ArticleItem from './ArticleItem';
import Footer from './Footer';

import '../styles/components/Responsive.css';

import evoImage from './images/evo.png';
import droneImage from './images/drone.png';
import phoneImage from './images/phone.png';
import tabImage from './images/tab.png';
import watchImage from './images/watch.png';

const App = () => {
  return (
    <>
      <Header />
      <Articles>
        <ArticleItem
          image={evoImage}
          title="Using banner stands to increase trade show traffic"
          text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun."
          sizeGrid
          label="Technology"
        />
        <ArticleItem
          image={phoneImage}
          title="Search Engine Optimization And Advertising"
          text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun."
          sizeGrid={false}
          label="Technology"
        />
        <ArticleItem
          image={watchImage}
          title="How to Write A Good Headline For Facebook Ads"
          text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun."
          sizeGrid
          label="Finance"
        />
        <ArticleItem
          image={tabImage}
          title="15 Tips To Increase Your Adwords Profits"
          text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun."
          sizeGrid
          label="Entertainment"
        />
        <ArticleItem
          image={droneImage}
          title="6 Powerful Tips For Creating Testimonials That Sell Your Products Fast"
          text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun."
          sizeGrid={false}
          label="Technology"
        />
        <ArticleItem
          image={evoImage}
          title="Using banner stands to increase trade show traffic"
          text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun."
          sizeGrid
          label="Technology"
        />
        <ArticleItem
          image={tabImage}
          title="15 Tips To Increase Your Adwords Profits"
          text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun."
          sizeGrid
          label="Entertainment"
        />
        <ArticleItem
          image={watchImage}
          title="How to Write A Good Headline For Facebook Ads"
          text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun."
          sizeGrid
          label="Finance"
        />
        <ArticleItem
          image={phoneImage}
          title="Search Engine Optimization And Advertising"
          text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun."
          sizeGrid={false}
          label="Technology"
        />
      </Articles>
      <Footer />
    </>
  );
};

export default App;
