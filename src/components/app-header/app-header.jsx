import React from 'react';
import { useSelector } from "react-redux";
import './app-header.css';

const AppHeader = ({ onOpenLoginForm, onLogout }) => {

  const isLogdIn = useSelector(state => state.logIn).status;

  return (
    <div className='d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-end mb-3'>
      <h1 className='mb-0'>TODO List</h1>
      <a
        href="#"
        className='text-decoration-none fw-bold text-dark hover'
        onClick={isLogdIn ? onLogout : onOpenLoginForm}
      >
        {isLogdIn ? 'Logout' : 'Login'}
      </a>
    </div>
  )
}

export default AppHeader;
