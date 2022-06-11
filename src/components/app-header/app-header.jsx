import React from 'react';
import './app-header.css';

const AppHeader = () => {
  return (
    <div className='d-flex justify-content-between align-items-end mb-3'>
      <h1 className='mb-0'>TODO List</h1>
      <p className='text-secondary mb-0'>Tasks: 5, Completed: 5</p>
    </div>
  )
}

export default AppHeader;
