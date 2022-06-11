export const initialState = [
  {
    id: 1,
    taskText: 'Изучить HTML',
    userName: 'Юрий',
    userEmail: 'yurick@test.ru',
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
    userName: 'Юрий',
    userEmail: 'yurick@test.ru',
    isCompleted: true
  },
  {
    id: 4,
    taskText: 'Изучить Reaact',
    userName: 'Юрий',
    userEmail: 'yurick@test.ru',
    isCompleted: true
  },
  {
    id: 5,
    taskText: 'Изучить Redux',
    userName: 'Юрий',
    userEmail: 'yurick@test.ru',
    isCompleted: false
  }
];

export const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed'
  }
];

export const ADD_TASK = 'ADD_TASK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
