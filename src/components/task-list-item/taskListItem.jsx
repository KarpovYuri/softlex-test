import React from 'react';
import './taskListItem.css';

const TaskListItem = ({ taskText, userName, userEmail, isCompleted }) => {

  return (
    <div className='row d-flex align-items-center'>
      <span className='text-hidden col-12 col-md-5'>
        {taskText}
      </span>
      <span className='text-hidden col-6 col-sm-5 col-md-3 mt-2 mt-sm-0'>{userName}</span>
      <span className='text-hidden col-6 col-sm-5 col-md-3 mt-2 mt-sm-0'>{userEmail}</span>
      <small className={`text-hidden offset-9 col-3 offset-sm-0 col-sm-2 col-md-1 mt-3 mt-sm-0 px-2 py-1
      fw-semibold bg-opacity-10 border  border-opacity-10 rounded-2 text-center
      ${isCompleted === 10 || isCompleted === 11 ? 'text-success bg-success border-success' : 'text-warning bg-warning border-warning'}`}>
        {isCompleted === 10 || isCompleted ? 'Done' : 'Active'}
      </small>
    </div>
  )
}

export default TaskListItem;
