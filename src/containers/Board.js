import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import './Board.css';
import MarketLine from './MarketLine';

const { REACT_APP_API_URI } = process.env;

const Board = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${REACT_APP_API_URI}/api/v1/products`).then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <>
      <MarketLine />
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
