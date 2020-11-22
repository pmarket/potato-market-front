import React from 'react';

const Pagination = ({ productsperpage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / productsperpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((pageNum) => (
        <li key={pageNum} className="page_item">
          <a className="page-link" onClick={() => paginate(pageNum)}>
            {pageNum}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
