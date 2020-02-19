import React from 'react';
import Card from './Card';
import cards from '../db';
import Grid from './Grid';
import '../styles/components/App.styl';

const App = () => {
  return (
    <div>
      <Grid>
        {cards.map(({ id, ...card }) => (
          <Card key={id} {...card} />
        ))}
      </Grid>
    </div>
  );
};

export default App;
