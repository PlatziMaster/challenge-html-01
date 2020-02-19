import React from 'react';
import Card from './Card';
import cards from '../db';
import '../styles/components/App.styl';

const App = () => {
  return (
    <div>
      {cards.map(({ id, ...card }) => (
        <Card key={id} {...card} />
      ))}
    </div>
  );
};

export default App;
