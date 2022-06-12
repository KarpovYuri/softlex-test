export const initialState = [
  {
    id: 1,
    taskText: 'Изучить HTML',
    userName: 'Василий',
    userEmail: 'vasily@test.ru',
    isCompleted: true
  },
  {
    id: 2,
    taskText: 'Изучить CSS',
    userName: 'Юрий',
    userEmail: 'yurick@test.ru',
    isCompleted: false
  },
  {
    id: 3,
    taskText: 'Изучить JavaScript',
    userName: 'Петр',
    userEmail: 'petr@test.ru',
    isCompleted: true
  },
  {
    id: 4,
    taskText: 'Изучить Reaact',
    userName: 'Василий',
    userEmail: 'vasily@test.ru',
    isCompleted: true
  },
  {
    id: 5,
    taskText: 'Изучить Redux',
    userName: 'Юрий',
    userEmail: 'yurick@test.ru',
    isCompleted: false
  },
  {
    id: 6,
    taskText: 'Изучить HTML-2',
    userName: 'Василий',
    userEmail: 'vasily@test.ru',
    isCompleted: true
  },
  {
    id: 7,
    taskText: 'Изучить CSS-2',
    userName: 'Юрий',
    userEmail: 'yurick@test.ru',
    isCompleted: false
  },
  {
    id: 8,
    taskText: 'Изучить JavaScript-2',
    userName: 'Петр',
    userEmail: 'petr@test.ru',
    isCompleted: true
  },
  {
    id: 9,
    taskText: 'Изучить Reaact-2',
    userName: 'Василий',
    userEmail: 'vasily@test.ru',
    isCompleted: false
  },
  {
    id: 10,
    taskText: 'Изучить Redux-2',
    userName: 'Юрий',
    userEmail: 'yurick@test.ru',
    isCompleted: false
  }
];

export const FILTERS_BTN = [
  {
    text: 'All',
    activeFilter: 'all',
  },
  {
    text: 'Active',
    activeFilter: 'active',
  },
  {
    text: 'Completed',
    activeFilter: 'completed'
  }
];

export const ADD_TASK = 'ADD_TASK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const SHOW_PAGE = 'SHOW_PAGE';
