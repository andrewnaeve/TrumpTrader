import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Main from './components/main';


render(

  <Router>
    <div>
      <Route exact path="/" component={Main} />
    </div>
  </Router>,
  document.getElementById('app')

);


