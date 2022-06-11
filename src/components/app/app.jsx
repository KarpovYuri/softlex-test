import React from 'react';
import { useSelector } from "react-redux";
import AppHeader from '../app-header/app-header.jsx';
import PaginationPanel from '../pagination-panel/pagination-panel.jsx'
import TaskStatusFilter from '../task-status-filter/task-status-filter.jsx';
import TaskList from '../task-list/task-list.jsx';
import TaskAddForm from '../task-add-form/task-add-form.jsx';
import './app.css';

const App = () => {

  const filters = useSelector(state => state.filters);
  const tasks = [...useSelector(state => state.addTasks)].reverse();

  const filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  }

  const filteredTasks = filterTasks(tasks, filters);


  return (
    <div className='mx-auto app'>
      <AppHeader />
      <div className='d-flex'>
        <TaskStatusFilter />
      </div>
      <TaskAddForm />
      <TaskList tasks={filteredTasks} />
      <PaginationPanel />
    </div>
  );
}

export default App;
