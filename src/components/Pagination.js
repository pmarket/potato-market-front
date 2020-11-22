import React from 'react';
import './Pagination.css';

const Pagination = ({ productsperpage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / productsperpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((pageNum) => (
          <li key={pageNum}>
            <a href="#" claaName="" onClick={() => paginate(pageNum)}>
              {pageNum}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
