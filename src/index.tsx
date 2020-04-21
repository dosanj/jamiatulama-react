import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { App } from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/jamiatulama-react/:link">
          <App />
        </Route>
        <Route path="/jamiatulama-react/">
          <App />
        </Route>
        <Route path="/">
          <Redirect to="/jamiatulama-react/" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
