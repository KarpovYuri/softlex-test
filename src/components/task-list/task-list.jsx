import React from 'react';
import TaskListItem from '../task-list-item/taskListItem.jsx';
import './task-list.css';

const TaskList = ({ tasks }) => {

  const elements = tasks.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id} className='list-group-item mt-2 pt-2 pb-2 pe-2'>
        <TaskListItem {...itemProps} />
      </li>
    )
  });

  return (
    <ul className='list-group mt-3 ps-0'>
      {elements}
    </ul>
  )
}

export default TaskList;
