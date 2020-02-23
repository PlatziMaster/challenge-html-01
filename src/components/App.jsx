import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Cointainer';
import DeckCard from './DeckCard';
import initialState from '../initialState';
import '../assets/styles/components/App.styl';

const App = () => (
  <>
    <Header />
    <Container>
      {initialState.map(card => (
        <DeckCard
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          tag={card.tag}
          size={card.size}
        />
      ))}
    </Container>
    <Footer />
  </>
);

export default App;
