import React from 'react';
import './taskListItem.css';

const PostListItem = ({ taskText, userName, userEmail, isCompleted }) => {

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <span>{taskText}</span>
      <span>{userName}</span>
      <span>{userEmail}</span>
      <small className={`px-2 py-1 fw-semibold bg-opacity-10 border  border-opacity-10 rounded-2
      ${isCompleted ? 'text-success bg-success border-success' : 'text-warning bg-warning border-warning'}`}>
        {isCompleted ? 'Complited' : 'Active'}
      </small>
    </div>
  )
}

export default PostListItem;
