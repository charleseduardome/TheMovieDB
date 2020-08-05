import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Movie from '../pages/Movie';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie/:idMovie" component={Movie} />
  </Switch>
);

export default Routes;
