import React from 'react';
import { Link } from 'react-router-dom';

import 'components/productList/Pagination.css';

const Pagination = ({ productsperpage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / productsperpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((pageNum) => (
          <li key={pageNum}>
            <Link to={`?offset=${pageNum - 1}`}>{pageNum}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
