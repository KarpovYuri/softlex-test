import React from 'react';
import './app-header.css';

const AppHeader = ({ numberTasks, numberCompletedTasks }) => {
  return (
    <div className='d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-end mb-3'>
      <h1 className='mb-0'>TODO List</h1>
      <p className='text-secondary mb-0'>Tasks: {numberTasks}, Completed: {numberCompletedTasks}</p>
    </div>
  )
}

export default AppHeader;
