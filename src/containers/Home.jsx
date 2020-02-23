import React from 'react';
import CardSummary from '../components/CardSummary';
import Data from '../__mocks__/initialData';

const Home = () => {
  return (
    <main className='home'>
      <div className='home-container'>
        {Data.map(card => (
          <CardSummary
            category={card.category}
            title={card.title}
            descrip={card.descrip}
            imageObj={card.imageObj}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
