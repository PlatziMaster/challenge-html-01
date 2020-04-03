import React from 'react';

import Card from './Card';

import CardInfo from './functions/CardInfo';

const CardContainer = ({ colId }) => {
  let columnId = colId;
  let id = 0;
  return (
    <>
      {CardInfo.map(data => {
        id += 1;
        if (columnId === id) {
          columnId += 3;
          return (
            <Card
              tag={data.tag}
              title={data.title}
              imgsrc={data.imgsrc}
              colId={colId}
              key={id}
            />
          );
        }
      })}
    </>
  );
};

export default CardContainer;
