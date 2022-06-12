import React from 'react';
import { useDispatch } from "react-redux";
import { showPage } from '../../actions/actionCreator';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import './pagination-panel.css';

const MyPaginate = styled(ReactPaginate).attrs({ activeClassName: 'active', })`
margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 10rem;
  li a {
    border-radius: 5px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;


const PaginationPanel = ({ pageCount, currentPage }) => {

  const dispatch = useDispatch();

  const handleChangePage = (data) => {
    dispatch(showPage({ activePage: data.selected }));
  }

  return (
    <MyPaginate
      pageCount={pageCount}
      onPageChange={handleChangePage}
      forcePage={currentPage}
    />
  )
}

export default PaginationPanel;
