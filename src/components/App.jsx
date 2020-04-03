import React from 'react';

import Header from './Header';
import CardContainer from './CardContainer';
import Footer from './Footer';

import './styles/Card.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/globals.css';
import './styles/media-queries.css';

const App = () => (
  <>
    <Header />
    <main className="card--container">
      <div className="col-1">
        <CardContainer colId={1} />
        <CardContainer colId={2} />
        <CardContainer colId={3} />
      </div>
      <div className="col-2">
        <CardContainer colId={2} />
        <CardContainer colId={3} />
        <CardContainer colId={1} />
      </div>
      <div className="col-3">
        <CardContainer colId={3} />
        <CardContainer colId={1} />
        <CardContainer colId={2} />
      </div>
    </main>
    <Footer />
  </>
);

export default App;
