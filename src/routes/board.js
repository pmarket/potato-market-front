import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from 'containers/notFound/NotFound';
import ProductBoard from 'containers/productList/ProductBoard';
import DetailPage from 'containers/productDetail/DetailPage';
import MyProduct from 'containers/myProduct/MyProduct';

const Routes = () => (
  <Switch>
    <Route exact path="/board" component={ProductBoard} />
    <Route path="/board/detail" component={DetailPage} />
    <Route exact path="/board/myboard" component={MyProduct} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
