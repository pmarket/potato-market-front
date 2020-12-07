import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from 'containers/notFound/NotFound';
import ProductBoard from 'containers/productList/ProductBoard';
import Home from 'containers/home/Home';
import MyProduct from 'containers/myProduct/MyProduct';
import DetailPage from 'containers/productDetail/DetailPage';
import AuthRouter from 'routes/auth';

const Routes = ({
  googleProfile,
  setGoogleProfile,
  isloggedin,
  setIsloggedin,
}) => (
  <Switch>
    <Route exact path="/" component={() => <Home isloggedin={isloggedin} />} />
    <Route exact path="/board" component={ProductBoard} />
    <Route exact path="/myproduct" component={MyProduct} />
    <Route path="/detailpage" component={DetailPage} />
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
