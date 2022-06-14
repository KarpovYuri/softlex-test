import React from 'react';
import TaskListItem from '../task-list-item/task-list-item.jsx';
import './task-list.css';

const TaskList = ({ tasks, onEditTask }) => {


  const elements = tasks.map((item) => {

    return (
      <li key={item.id} className='list-group-item mt-2 pt-2 pb-2 pe-4'>
        <TaskListItem {...item} onEditTask={onEditTask} />
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
