import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MarketLine from 'containers/MarketLine';
import NotFound from 'containers/NotFound';
import Login from 'containers/auth/Login';
import GoogleAuthCallback from 'containers/auth/GoogleAuthCallback';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MarketLine} />
    <Route exact path="/404" component={NotFound} />
    <Route exact path="/auth" component={Login} />
    <Route exact path="/auth/google/callback" component={GoogleAuthCallback} />
  </Switch>
);

export default Routes;
