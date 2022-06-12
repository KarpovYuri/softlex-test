import React from 'react';
import './app-header.css';

const AppHeader = ({ numberTasks, numberCompletedTasks, onOpenLoginForm }) => {


  return (
    <div className='d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-end mb-3'>
      <h1 className='mb-2'>TODO List</h1>
      <div className='text-start text-sm-end'>
        <a
          href="#"
          className='text-decoration-none fw-bold text-dark hover'
          onClick={onOpenLoginForm}
        >
          Login
        </a>
        <p className='text-secondary mb-0'>Tasks: {numberTasks}, Completed: {numberCompletedTasks}</p>
      </div>
    </div>
  )
}

export default AppHeader;
