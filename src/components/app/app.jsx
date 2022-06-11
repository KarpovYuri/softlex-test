import React from 'react';
import AppHeader from '../app-header/app-header.jsx';
import PaginationPanel from '../pagination-panel/pagination-panel.jsx'
import TaskStatusFilter from '../task-status-filter/task-status-filter.jsx';
import TaskList from '../task-list/task-list.jsx';
import TaskAddForm from '../task-add-form/task-add-form.jsx';
import './app.css';

const App = () => {

  return (
    <div className='mx-auto app'>
      <AppHeader />
      <div className='d-flex'>
        <TaskStatusFilter />
      </div>
      <TaskAddForm />
      <TaskList />
      <PaginationPanel />
    </div>
  );
}

export default App;
