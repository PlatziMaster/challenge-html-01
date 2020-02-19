import React from 'react';
import Card from './Card';
import Header from './Header';
import db from '../db';
import '../styles/components/App.styl';

const App = () => {
  return (
    <div>
      <Header sections={db.sections} />
      {db.cards.map(({ id, ...card }) => (
        <Card key={id} {...card} />
      ))}
    </div>
  );
};

export default App;
