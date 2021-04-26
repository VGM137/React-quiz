import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Game from '../containers/Game'
import Playing from '../containers/Playing'
import Results from '../containers/Results'
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/game' component={Game} />
      <Route exact path='/playing' component={Playing} />
      <Route exact path='/results' component={Results} />
    </Switch>
  </BrowserRouter>
);

export default App;