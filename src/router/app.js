import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../container/Home';
import '../styles/App.styl';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/A" component={Home} />
        <Route exact path="/B" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
