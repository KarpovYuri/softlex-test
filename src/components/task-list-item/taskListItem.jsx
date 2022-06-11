import React from 'react';
import './taskListItem.css';

const PostListItem = ({ task, user, email }) => {

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <span>{task}</span>
      <span>{user}</span>
      <span>{email}</span>
      <small className='px-2 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2'>
        Done
      </small>
    </div>
  )
}

export default PostListItem;
