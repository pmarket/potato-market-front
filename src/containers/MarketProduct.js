import React from 'react';
import Navigation from './Nav.js';
import gamza from '../images/hansei.jpg'

/**
 * /potato-market-front/product 페이지
 */
const MarketProduct = () => {
  return (
    <div>
      <Navigation />

      <img class="bg" src={gamza} />
    </div>
  );
};

export default MarketProduct;
