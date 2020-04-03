import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../container/Home';
import HomeB from '../container/HomeB';
import HomeC from '../container/HomeC';
import CategoryA from '../container/CategoryA';
import '../styles/App.styl';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/B" component={HomeB} />
        <Route exact path="/C" component={HomeC} />
        <Route exact path="/Ca" component={CategoryA} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
