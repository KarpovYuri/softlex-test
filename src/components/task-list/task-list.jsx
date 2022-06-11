import React from 'react';
import PostListItem from '../task-list-item/taskListItem.jsx';
import { useSelector } from "react-redux";
import './task-list.css';

const PostList = () => {

  let tasks = [...useSelector(state => state.tasks)].reverse();

  const elements = tasks.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id} className='list-group-item mt-2 pt-2 pb-2 pe-2'>
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
