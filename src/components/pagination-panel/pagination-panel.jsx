import React from 'react';
import './pagination-panel.css';

const PaginationPanel = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination d-flex justify-content-center mt-4">
        <li className="page-item">
          <a className="page-link text-secondary" href="#">
            <i className="fa-solid fa-angle-left"></i>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary" href="#">1</a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary" href="#">2</a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary" href="#">3</a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary" href="#">
            <i className="fa-solid fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default PaginationPanel;
