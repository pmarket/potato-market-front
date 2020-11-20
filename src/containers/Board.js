import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import './Board.css';
import MarketLine from './MarketLine';

const { REACT_APP_API_URI } = process.env;

const Board = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`${REACT_APP_API_URI}/api/v1/products`).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <MarketLine products={products} setProducts={setProducts} />
      <div className="row">
        <div className="row center">
          {products.map((product) => (
            <List key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
