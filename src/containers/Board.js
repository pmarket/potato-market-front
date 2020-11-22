import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import './Board.css';
import MarketLine from './MarketLine';
import Pagination from '../components/Pagination';

const { REACT_APP_API_URI } = process.env;

const Board = () => {
  const [products, setProducts] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [productsperpage] = useState(10);

  const index_lastproduct = currentpage * productsperpage;
  const index_firstproduct = index_lastproduct - productsperpage;
  const currentproducts = products.slice(index_firstproduct, index_lastproduct);

  const paginate = (pageNumber) => setCurrentpage(pageNumber);

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
          {currentproducts.map((product) => (
            <List key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Pagination
        productsperpage={productsperpage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </>
  );
};

export default Board;
