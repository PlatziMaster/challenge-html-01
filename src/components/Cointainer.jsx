import React from 'react';
import '../assets/styles/components/Container.styl';
import '../assets/styles/components/DeckCard.styl';

const Container = ({ children }) => (
  <main className="container">{children}</main>
);

export default Container;
