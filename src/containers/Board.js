import React, { useState, useEffect } from 'react';
import List from './List';
import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

const Board = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${REACT_APP_API_URI}/api/v1/products`).then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <div>
      <div className="row center">
        {products.map((product) => (
          <List key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Board;
