import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'containers/NotFound';
import Board from 'containers/Board';
import Profile from 'containers/auth/Profile';
import SignUpGoogle from 'containers/auth/SignUpGoogle';
import GoogleAuthCallback from 'containers/auth/GoogleAuthCallback';
import Home from 'containers/Home';
import GamzaSignup from 'components/signupform/GamzaSignup';
import LoginMain from 'containers/login/LoginMain';

const Routes = ({ googleProfile, setGoogleProfile }) => (
  <Switch>
    <Route exact path="/board" component={Board} />
    <Route exact path="/profile" component={() => <Profile />} />
    <Route
      exact
      path="/auth/google/callback"
      component={() => (
        <GoogleAuthCallback setGoogleProfile={setGoogleProfile} />
      )}
    />
    <Route
      exact
      path="/signup/google"
      component={() => <SignUpGoogle googleProfile={googleProfile} />}
    />
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={GamzaSignup} />
    <Route exact path="/loginmain" component={LoginMain} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
