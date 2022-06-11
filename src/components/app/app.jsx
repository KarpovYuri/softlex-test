import React from 'react';
import AppHeader from '../app-header/app-header.jsx';
import PaginationPanel from '../pagination-panel/pagination-panel.jsx'
import TaskStatusFilter from '../task-status-filter/task-status-filter.jsx';
import TaskList from '../task-list/task-list.jsx';
import TaskAddForm from '../task-add-form/task-add-form.jsx';
import './app.css';

const App = () => {

  const data = [
    { task: 'Изучить HTML', user: 'Юрий', email: 'yurick@test.ru', id: 1 },
    { task: 'Изучить CSS', user: 'Юрий', email: 'yurick@test.ru', id: 2 },
    { task: 'Изучить JavaScript', user: 'Юрий', email: 'yurick@test.ru', id: 3 },
    { task: 'Изучить Reaact', user: 'Юрий', email: 'yurick@test.ru', id: 4 },
    { task: 'Изучить Redux', user: 'Юрий', email: 'yurick@test.ru', id: 5 }
  ];

  return (
    <div className='mx-auto app'>
      <AppHeader />
      <div className='search-panel d-flex'>
        <TaskStatusFilter />
      </div>
      <TaskList posts={data} />
      <TaskAddForm />
      <PaginationPanel />
    </div>
  );
}

export default App;
