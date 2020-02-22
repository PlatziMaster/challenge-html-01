import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import '../styles/App.styl';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
