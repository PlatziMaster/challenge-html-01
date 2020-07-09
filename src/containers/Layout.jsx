import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Container from '../containers/Container';

import '../assets/styles/App.styl';
import initialState from '../initialState';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {initialState.map(card => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            category={card.category}
            size={card.size}
          />
        ))}
      </Container>
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
