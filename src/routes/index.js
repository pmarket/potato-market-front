import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'containers/NotFound';
import MarketProduct from 'containers/MarketProduct';
import AboutGamza from 'containers/AboutGamza';
import Board from 'containers/Board';
import Login from 'containers/auth/Login';
import SignUp from 'containers/auth/SignUp';
import GoogleAuthCallback from 'containers/auth/GoogleAuthCallback';
import MarketLine from 'containers/MarketLine';

const Routes = ({ profile, setProfile }) => (
  <Switch>
    <Route exact path="/product" component={MarketProduct} />
    <Route exact path="/404" component={NotFound} />
    <Route exact path="/about" component={AboutGamza} />
    <Route exact path="/board" component={Board} />
    <Route exact path="/404" component={NotFound} />
    <Route exact path="/" component={Login} />
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
    <Route path="/product/register" component={MarketLine} />
  </Switch>
);

export default Routes;
