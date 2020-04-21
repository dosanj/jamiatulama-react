import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { App } from './App';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './scripts/swiped-events';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/:link">
          <App />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
