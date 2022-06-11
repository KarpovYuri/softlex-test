import React from 'react';
import PostListItem from '../task-list-item/taskListItem.jsx';
import './task-list.css';

const PostList = ({ posts }) => {

  const elements = posts.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id} className='list-group-item mt-2 pt-2 pb-2'>
        <PostListItem {...itemProps} />
      </li>
    )
  });

  return (
    <ul className='list-group mt-3 ps-0'>
      {elements}
    </ul>
  )
}

export default PostList;
