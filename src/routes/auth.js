import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from 'containers/notFound/NotFound';
import Profile from 'containers/myProfile//Profile';
import SignUpGoogle from 'containers/googleAuth/SignUpGoogle';
import GoogleAuthCallback from 'containers/googleAuth/GoogleAuthCallback';
import GamzaSignup from 'containers/signup/GamzaSignup';
import LoginMain from 'containers/login/LoginMain';

const Routes = ({
  googleProfile,
  setGoogleProfile,
  isloggedin,
  setIsloggedin,
}) => (
  <Switch>
    <Route
      exact
      path="/auth/profile"
      component={() => <Profile setIsloggedin={setIsloggedin} />}
    />
    <Route
      exact
      path="/auth/google/callback"
      component={() => (
        <GoogleAuthCallback
          setGoogleProfile={setGoogleProfile}
          setIsloggedin={setIsloggedin}
        />
      )}
    />
    <Route
      exact
      path="/auth/signup/google"
      component={() => (
        <SignUpGoogle
          googleProfile={googleProfile}
          setIsloggedin={setIsloggedin}
        />
      )}
    />
    <Route
      exact
      path="/auth/signup"
      component={() => <GamzaSignup isloggedin={isloggedin} />}
    />
    <Route
      exact
      path="/auth/login"
      component={() => (
        <LoginMain isloggedin={isloggedin} setIsloggedin={setIsloggedin} />
      )}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
