import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'containers/NotFound';
import Board from 'containers/Board';
import Login from 'containers/auth/Login';
import SignUp from 'containers/auth/SignUp';
import GoogleAuthCallback from 'containers/auth/GoogleAuthCallback';
import Home from 'containers/Home';

const Routes = ({ profile, setProfile, token, setToken }) => (
  <Switch>
    <Route exact path="/404" component={NotFound} />
    <Route exact path="/board" component={Board} />
    <Route
      exact
      path="/auth/login"
      component={() => <Login token={token} setToken={setToken} />}
    />
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
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
