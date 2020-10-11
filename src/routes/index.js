import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MarketLine from 'containers/MarketLine';
import NotFound from 'containers/NotFound';
import MarketProduct from 'containers/MarketProduct';

const Routes = () => (
  <Switch>
    <Route exact path="/product" component={MarketProduct} />
    <Route exact path="/" component={MarketLine} />
    <Route exact path="/404" component={NotFound} />
  </Switch>
);

export default Routes;
