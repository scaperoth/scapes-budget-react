import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, AddItem, NotFound } from '../pages';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/budget-item/new" component={AddItem} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
