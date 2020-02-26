import React, { useState } from 'react';
import CardSummary from '../components/CardSummary';
import Data from '../__mocks__/initialData';

const $bodyTag = document.getElementsByTagName('body')[0];
const BreakPointDesktop = 1439;

const Home = () => {
  const [clientWidth, setClientWidth] = useState($bodyTag.clientWidth);
  window.addEventListener('resize', () => setClientWidth($bodyTag.clientWidth));

  const DataColFull = Data.map((card, index) => {
    const i = index + 1;
    return (
      <CardSummary
        category={card.category}
        title={card.title}
        descrip={card.descrip}
        imageObj={card.imageObj}
        key={i}
      />
    );
  });

  const lengthData = DataColFull.length;
  const indexesToPrintCard = (start, step, limit) => {
    const amountItems = Math.ceil(limit / step);
    const baseArray = Array(amountItems).fill(0);
    return baseArray.map((v, i) => i * step + start);
  };

  const homeContainerCol = (start, step) => (
    <div className='home-container__col' key={start + 1}>
      {DataColFull.filter((card, index) => {
        return indexesToPrintCard(start, step, lengthData).includes(index);
      })}
    </div>
  );

  return (
    <main className='home'>
      <div className='home-container'>
        {clientWidth <= BreakPointDesktop
          ? Array(2)
              .fill(1)
              .map((item, col) => homeContainerCol(col, 2))
          : Array(3)
              .fill(1)
              .map((item, col) => homeContainerCol(col, 3))}
      </div>
    </main>
  );
};

export default Home;
