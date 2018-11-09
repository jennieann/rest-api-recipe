import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Categories from './Categories/Categories';
import Recipes from './Recipes/Recipes';
import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/categories" component={Categories} />
      <Route path="/recipes" component={Recipes} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
