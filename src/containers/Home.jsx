import React from 'react';
import CardSummary from '../components/CardSummary';
import Data from '../__mocks__/initialData';

const Home = () => {
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

  const lengthDataColFull = DataColFull.length;

  const indexArrayToPrintCard = (start, step, limit) => {
    const amountItems = Math.ceil(limit / step);
    const baseArray = Array(amountItems).fill(0);
    return baseArray.map((v, i) => i * step + start);
  };

  const indexArrayToPrintCardCol1to2 = indexArrayToPrintCard(
    0,
    2,
    lengthDataColFull
  );
  const indexArrayToPrintCardCol2to2 = indexArrayToPrintCard(
    1,
    2,
    lengthDataColFull
  );
  const indexArrayToPrintCardCol1to3 = indexArrayToPrintCard(
    0,
    3,
    lengthDataColFull
  );
  const indexArrayToPrintCardCol2to3 = indexArrayToPrintCard(
    1,
    3,
    lengthDataColFull
  );
  const indexArrayToPrintCardCol3to3 = indexArrayToPrintCard(
    2,
    3,
    lengthDataColFull
  );

  return (
    <main className='home'>
      <div className='home-container'>
        {document.getElementsByTagName('body')[0].clientWidth < 1439 ? (
          <>
            <div className='home-container__col'>
              {DataColFull.filter((card, index) => {
                return indexArrayToPrintCardCol1to2.includes(index);
              })}
            </div>
            <div className='home-container__col'>
              {DataColFull.filter((card, index) => {
                return indexArrayToPrintCardCol2to2.includes(index);
              })}
            </div>
          </>
        ) : (
          <>
            <div className='home-container__col'>
              {DataColFull.filter((card, index) => {
                return indexArrayToPrintCardCol1to3.includes(index);
              })}
            </div>
            <div className='home-container__col'>
              {DataColFull.filter((card, index) => {
                return indexArrayToPrintCardCol2to3.includes(index);
              })}
            </div>
            <div className='home-container__col'>
              {DataColFull.filter((card, index) => {
                return indexArrayToPrintCardCol3to3.includes(index);
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
