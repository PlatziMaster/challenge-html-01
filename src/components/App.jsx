import React from 'react';
import '../styles/App.styl';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Layout from './Layout';

const App = () => (
  <>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </>
);

export default App;
