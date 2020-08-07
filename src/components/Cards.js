import React from 'react';

import Card from './Card';
import State from './State';
import '../styles/components/Card.styl';

const Cards = () => {
  return (
    <div className="CardList">
      <div className="CardList__grid">
        {State.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
