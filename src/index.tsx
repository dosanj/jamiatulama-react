import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { App } from './App';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/:link">
        <App />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
