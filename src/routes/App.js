import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from '../containers/Home';
import Game from '../containers/Game'
import Playing from '../containers/Playing'
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/game' component={Game} />
      <Route exact path='/playing' component={Playing} />
    </Switch>
  </BrowserRouter>
);

export default App;