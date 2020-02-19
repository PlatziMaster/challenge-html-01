import React, { useState } from 'react';
import Item from '../components/Item';

const Home = () => {
  const initialState = {
    data: [
      {
        id: 1,
        hero: '../../resources/imgs/dose-media-344938.png',
        tag: 'Technology',
        title: 'Using Banner Stands To Increase Trade Show Traffic',
        subtitle:
          'There us a lot of exciting stuff going on in the starts above us that make astronomy so much fun.',
      },
      {
        id: 2,
        hero: '../../resources/imgs/aidan-hancock-455440.png',
        tag: 'Technology',
        title: 'Search Engine Optimization And Advertising',
        subtitle:
          'There us a lot of exciting stuff going on in the starts above us that make astronomy so much fun.',
      },
      {
        id: 3,
        hero: '../../resources/imgs/crew-22235.png',
        tag: 'Finance',
        title: 'Writing A Good Headline For Your Advertisement',
        subtitle:
          'There us a lot of exciting stuff going on in the starts above us that make astronomy so much fun.',
      },
      {
        id: 4,
        hero: '../../resources/imgs/annie-spratt-213059.png',
        tag: 'Technology',
        title:
          '6 Powerful Tips To Creating Testimonials That Sell Your Products Fast',
        subtitle:
          'There us a lot of exciting stuff going on in the starts above us that make astronomy so much fun.',
      },
      {
        id: 5,
        hero: '../../resources/imgs/jeff-sheldon-264920.png',
        tag: 'Entertainment',
        title: '15 Tips To Increase Your Adwords Profits',
        subtitle:
          'There us a lot of exciting stuff going on in the starts above us that make astronomy so much fun.',
      },
      {
        id: 6,
        hero: '../../resources/imgs/dose-media-344938.png',
        tag: 'Technology',
        title: 'Using Banner Stands To Increase Trade Show Traffic',
        subtitle:
          'There us a lot of exciting stuff going on in the starts above us that make astronomy so much fun.',
      },
      {
        id: 7,
        hero: '../../resources/imgs/aidan-hancock-455440.png',
        tag: 'Technology',
        title: 'Search Engine Optimization And Advertising',
        subtitle:
          'There us a lot of exciting stuff going on in the starts above us that make astronomy so much fun.',
      },
      {
        id: 8,
        hero: '../../resources/imgs/crew-22235.png',
        tag: 'Finance',
        title: 'Writing A Good Headline For Your Advertisement',
        subtitle:
          'There us a lot of exciting stuff going on in the starts above us that make astronomy so much fun.',
      },
      {
        id: 9,
        hero: '../../resources/imgs/annie-spratt-213059.png',
        tag: 'Technology',
        title:
          '6 Powerful Tips To Creating Testimonials That Sell Your Products Fast',
        subtitle:
          'There us a lot of exciting stuff going on in the starts above us that make astronomy so much fun.',
      },
    ],
  };

  const [state] = useState(initialState);

  return (
    <div className="App">
      {state.data.map(item => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Home;
