import React from 'react';
import './task-status-filter.css';

const TaskStatusFilter = () => {
  return (
    <>
      <div className="input-group me-2">
        <div className="input-group-text">Name</div>
        <input type="text" className="form-control"></input>
      </div>
      <div className="input-group me-2">
        <div className="input-group-text">E-mail</div>
        <input type="text" className="form-control"></input>
      </div>
      <div className='btn-group'>
        <button
          type='button'
          className='btn btn-outline-secondary'>
          All
        </button>
        <button
          type='button'
          className='btn btn-outline-secondary'>
          Active
        </button>
        <button
          type='button'
          className='btn btn-outline-secondary'>
          Complited
        </button>
      </div>
    </>
  )
}

export default TaskStatusFilter;
