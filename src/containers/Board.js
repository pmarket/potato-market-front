import React, { useState, useEffect } from 'react';
import querystring from 'querystring';
import axios from 'axios';
import List from './List';
import './Board.css';
import { Link } from 'react-router-dom';
import MarketLine from './MarketLine';
import Pagination from '../components/Pagination';
import DetailPage from '../components/DetailPage';

const { REACT_APP_API_URI } = process.env;

const Board = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(1);

  const limit = 12; // 한 페이지에 보여줄 상품 갯수
  const offset = querystring.parse(window.location.search)['?offset'] || 0; // 페이지 번호

  useEffect(() => {
    axios
      .get(
        `${REACT_APP_API_URI}/api/v1/product/list?offset=${offset}&limit=${limit}`,
      )
      .then((response) => {
        setTotalCount(response.data.data.page.totalCount);
        setProducts(response.data.data.products);
      });
  }, [offset]);
  return (
    <>
      <MarketLine products={products} setProducts={setProducts} />
      <div className="row">
        <div className="row center">
          {products.map((product) => (
            <Link to={`/detailpage/${products.id}`} components={DetailPage}>
              <List key={product.id} product={product} />
            </Link>
          ))}
        </div>
      </div>
      <Pagination productsperpage={limit} totalPosts={totalCount} />
    </>
  );
};

export default Board;
