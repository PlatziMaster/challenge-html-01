import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Cointainer';
import DeckCard from './DeckCard';
import '../assets/styles/components/App.styl';

const App = () => (
  <>
    <Header />
    <Container>
      <DeckCard />
    </Container>
    <Footer />
  </>
);

export default App;
