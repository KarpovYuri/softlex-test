import React from 'react';
import { useSelector } from "react-redux";
import AppHeader from '../app-header/app-header.jsx';
import PaginationPanel from '../pagination-panel/pagination-panel.jsx'
import TaskStatusFilter from '../task-status-filter/task-status-filter.jsx';
import TaskList from '../task-list/task-list.jsx';
import TaskAddForm from '../task-add-form/task-add-form.jsx';
import './app.css';

const App = () => {

  const perPage = 3;
  const curentPage = useSelector(state => state.showPage).activePage;
  const startTask = curentPage * perPage;
  const filters = useSelector(state => state.filters);
  const tasks = [...useSelector(state => state.addTasks)].reverse();
  const numberTasks = tasks.length;
  const numberCompletedTasks = tasks.filter(task => task.isCompleted).length;

  function filterTasks(tasks, { activeFilter, filterValue }) {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      case 'name':
        return tasks.filter(task => task.userName === filterValue);
      case 'email':
        return tasks.filter(task => task.userEmail === filterValue);
      default:
        return tasks;
    }
  }

  const filteredTasks = filterTasks(tasks, filters);
  const displayedTasks = filteredTasks.slice(startTask, startTask + perPage);
  const pageCount = Math.ceil(filteredTasks.length / perPage);


  return (
    <div className='mx-auto app'>
      <AppHeader
        numberTasks={numberTasks}
        numberCompletedTasks={numberCompletedTasks} />
      <div className='d-flex'>
        <TaskStatusFilter />
      </div>
      <TaskAddForm />
      <TaskList tasks={displayedTasks} />
      <PaginationPanel
        pageCount={pageCount}
        currentPage={curentPage} />
    </div>
  );
}

export default App;
