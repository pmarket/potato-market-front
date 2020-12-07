import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRouter from 'routes/auth';
import BoardRouter from 'routes/board';

import NotFound from 'containers/notFound/NotFound';
import Home from 'containers/home/Home';

const Routes = ({
  googleProfile,
  setGoogleProfile,
  isloggedin,
  setIsloggedin,
}) => (
  <Switch>
    <Route exact path="/" component={() => <Home isloggedin={isloggedin} />} />
    <Route path="/board" component={BoardRouter} />
    <Route
      path="/auth"
      component={() => (
        <AuthRouter
          googleProfile={googleProfile}
          setGoogleProfile={setGoogleProfile}
          isloggedin={isloggedin}
          setIsloggedin={setIsloggedin}
        />
      )}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
