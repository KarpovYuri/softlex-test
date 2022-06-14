import React from 'react';
import { useDispatch } from "react-redux";
import { showPage } from '../../actions/actionCreator';
import ReactPaginate from 'react-paginate';
import './pagination-panel.css';

const PaginationPanel = ({ pageCount, currentPage }) => {

  pageCount = Math.ceil(pageCount);

  const dispatch = useDispatch();

  const handleChangePage = (data) => {
    dispatch(showPage({ activePage: data.selected }));
  }

  return (
    <nav aria-label="Панель пагинации">
      <ReactPaginate
        previousLabel='<'
        nextLabel='>'
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link text-secondary shadow-none"
        pageCount={pageCount}
        onPageChange={handleChangePage}
        containerClassName="pagination pagination-sm justify-content-center mt-4"
        pageClassName="page-item"
        pageLinkClassName="page-link text-secondary shadow-none"
        previousClassName="page-item"
        previousLinkClassName="page-link text-secondary shadow-none"
        nextClassName="page-item"
        nextLinkClassName="page-link text-secondary shadow-none"
        activeClassName="active"
        forcePage={currentPage}
      />
    </nav>
  )
}

export default PaginationPanel;
