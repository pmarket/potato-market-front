import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MarketLine from 'containers/MarketLine';
import NotFound from 'containers/NotFound';
import Login from 'containers/auth/Login';
import SignUp from 'containers/auth/SignUp';
import GoogleAuthCallback from 'containers/auth/GoogleAuthCallback';

const Routes = ({ profile, setProfile }) => (
  <Switch>
    <Route exact path="/" component={MarketLine} />
    <Route exact path="/404" component={NotFound} />
    <Route exact path="/auth" component={Login} />
    <Route
      exact
      path="/auth/google/callback"
      component={() => <GoogleAuthCallback setProfile={setProfile} />}
    />
    <Route
      exact
      path="/auth/signup"
      component={() => <SignUp profile={profile} setProfile={setProfile} />}
    />
  </Switch>
);

export default Routes;
