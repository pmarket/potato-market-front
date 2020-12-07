import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from 'containers/notFound/NotFound';
import ProductBoard from 'containers/productList/ProductBoard';
import Profile from 'containers/myProfile//Profile';
import SignUpGoogle from 'containers/googleAuth/SignUpGoogle';
import GoogleAuthCallback from 'containers/googleAuth/GoogleAuthCallback';
import Home from 'containers/home/Home';
import GamzaSignup from 'components/signup/GamzaSignup';
import LoginMain from 'containers/login/LoginMain';
import MyProduct from 'containers/myProduct/MyProduct';
import DetailPage from 'containers/productDetail/DetailPage';

const Routes = ({
  googleProfile,
  setGoogleProfile,
  isloggedin,
  setIsloggedin,
}) => (
  <Switch>
    <Route exact path="/board" component={ProductBoard} />
    <Route
      exact
      path="/profile"
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
      path="/signup/google"
      component={() => (
        <SignUpGoogle
          googleProfile={googleProfile}
          setIsloggedin={setIsloggedin}
        />
      )}
    />
    <Route exact path="/" component={() => <Home isloggedin={isloggedin} />} />
    <Route
      path="/signup"
      component={() => <GamzaSignup isloggedin={isloggedin} />}
    />
    <Route
      exact
      path="/login"
      component={() => (
        <LoginMain isloggedin={isloggedin} setIsloggedin={setIsloggedin} />
      )}
    />
    <Route exact path="/myproduct" component={MyProduct} />
    <Route path="/detailpage" component={DetailPage} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
