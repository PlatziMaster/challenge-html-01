import React from 'react';
import Card from './Card';
import Header from './Header';
import db from '../db';
import Grid from './Grid';
import Footer from './Footer';
import '../styles/components/App.styl';

const App = () => {
  return (
    <div>
      <Header sections={db.sections} />
      <Grid>
        {db.cards.map(({ id, ...card }) => (
          <Card key={id} {...card} />
        ))}
      </Grid>
      <Footer sections={db.sections} />
    </div>
  );
};

export default App;
