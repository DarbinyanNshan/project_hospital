import React from 'react';
import "./style.css";

export const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    } else if (pages[pages.length - 1]?.props.children !== '...') {
      pages.push(<span key={i}>...</span>);
    }
  }

  return <div className="pagination">{pages}</div>;
};
