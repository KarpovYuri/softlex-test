import React from 'react';
import './task-add-form.css';

const TaskAddForm = () => {
  return (
    <form className='d-flex mt-4'>
      <input
        className='form-control me-1'
        type='text'
        placeholder='Task'
      />
      <input
        className='form-control me-1'
        type='text'
        placeholder='Name'
      />
      <input
        className='form-control me-1'
        type='text'
        placeholder='E-mail'
      />
      <button
        className='btn btn-outline-secondary'
        type='submit'>
        Add
      </button>
    </form>
  )
}

export default TaskAddForm;
