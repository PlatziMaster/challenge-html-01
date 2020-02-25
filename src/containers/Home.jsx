import React from 'react';
import CardSummary from '../components/CardSummary';
import Data from '../__mocks__/initialData';

const Home = () => {
  const DataColFull = Data.map(card => (
    <CardSummary
      category={card.category}
      title={card.title}
      descrip={card.descrip}
      imageObj={card.imageObj}
    />
  ));

  return (
    <main className='home'>
      <div className='home-container'>
        <div className='home-container__col'>
          {DataColFull.filter((card, index) => {
            const iOffset = index + 1;
            const condition = iOffset % 3 === 0 || iOffset % 2 === 0;
            return !condition;
          })}
        </div>

        <div className='home-container__col'>
          {DataColFull.filter((card, index) => {
            const iOffset = index + 1;
            const condition = !(iOffset % 3 === 0) && iOffset % 2 === 0;
            return condition;
          })}
        </div>

        <div className='home-container__col'>
          {DataColFull.filter((card, index) => {
            const iOffset = index + 1;
            const condition = iOffset % 3 === 0 && !(iOffset % 2 === 0);
            return condition;
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
