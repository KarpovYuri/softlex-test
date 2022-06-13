import React from 'react';
import './taskListItem.css';

const TaskListItem = ({ text, username, email, status }) => {

  return (
    <div className='row d-flex align-items-center'>
      <span className='text-hidden col-12 col-md-5'>
        {text}
      </span>
      <span className='text-hidden col-6 col-sm-5 col-md-3 mt-2 mt-sm-0'>{username}</span>
      <span className='text-hidden col-6 col-sm-5 col-md-3 mt-2 mt-sm-0'>{email}</span>
      <small className={`text-hidden offset-9 col-3 offset-sm-0 col-sm-2 col-md-1 mt-3 mt-sm-0 px-2 py-1
      fw-semibold bg-opacity-10 border  border-opacity-10 rounded-2 text-center
      ${status === 10 || status === 11 ? 'text-success bg-success border-success' : 'text-warning bg-warning border-warning'}`}>
        {status === 10 || status ? 'Done' : 'Active'}
      </small>
    </div>
  )
}

export default TaskListItem;
