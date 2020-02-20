import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Cointainer';
import '../assets/styles/components/App.styl';

const App = () => (
  <>
    <Header />
    <Container>
      <div>Card</div>
    </Container>
    <Footer />
  </>
);

export default App;
