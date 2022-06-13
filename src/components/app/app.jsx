import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AppHeader from '../app-header/app-header.jsx';
import PaginationPanel from '../pagination-panel/pagination-panel.jsx'
import TaskStatusFilter from '../task-status-filter/task-status-filter.jsx';
import TaskList from '../task-list/task-list.jsx';
import TaskAddForm from '../task-add-form/task-add-form.jsx';
import LoginPopup from '../loginPopup/loginPopup.jsx';
import api from '../../utils/api';
import './app.css';


const App = () => {

  const [isTasks, setIsTasks] = useState([]);
  const [isPageCount, setIsPageCount] = useState([]);
  const curentPage = useSelector(state => state.showPage).activePage;

  // Получение задач с сервера
  useEffect(() => {
    api.getInitialTasks(curentPage + 1)
      .then(Tasks => {
        setIsPageCount(Math.ceil(Tasks.message.total_task_count / 3));
        setIsTasks(Tasks.message.tasks);
      })
      .catch(error => console.log(error));
  }, [curentPage]);


  //const filters = useSelector(state => state.filters);
  //const tasks = [...useSelector(state => state.addTasks)].reverse();
  //const numberTasks = tasks.length;
  //const numberCompletedTasks = tasks.filter(task => {
  //if (task.status === 10 || task.status === 11) return task
  //}).length;


  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState('');


  // Обработка задач в соответствии с фильтром
  // function filterTasks(tasks, { activeFilter, filterValue }) {
  //   switch (activeFilter) {
  //     case 'completed':
  //       return tasks.filter(task => {
  //         if (task.status === 10 && task.status !== 11) return task
  //       });
  //     case 'active':
  //       return tasks.filter(task => {
  //         if (task.status !== 10 && task.status !== 11) return task
  //       });
  //     case 'name':
  //       return tasks.filter(task => task.username === filterValue);
  //     case 'email':
  //       return tasks.filter(task => task.email === filterValue);
  //     default:
  //       return tasks;
  //   }
  // }



  // Открытие модалки
  function handleOpenLoginForm(evt) {
    evt.preventDefault();
    setLoginPopupOpen(true);
  }


  // Закрытие модалки
  function closePopup() {
    setLoginPopupOpen(false);
  }


  // Проверка токена и авторизация пользователя
  useEffect(() => {
    if (localStorage.getItem('jwt')) { setIsLoggedIn(true) }
  }, []);


  // Вход в аккаунт
  function handleLoginUser(username, password) {
    return new Promise((resolve) => {
      api.loginUser(username, password)
        .then(data => {
          if (data.message.token) {
            setIsLoggedIn(true);
            localStorage.setItem('jwt', data.message.token);
            closePopup();
            resolve();
          } else console.log(data.message);

        })
        .catch(error => {
          console.log(error)
        })
    })
  }


  // Выход из аккаунта
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
  }


  // Добавление задачи на сервер
  // function handleAddTask(data) {
  //   api.loginUser(data)
  //     .then(data => console.log(data))
  //     .catch(error => console.log(error))
  // }

  //Редактирование задачи на сервере
  // api.editTask()
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error))


  return (
    <>
      <div className='mx-auto app'>
        <AppHeader
          /*numberTasks={numberTasks}
          numberCompletedTasks={numberCompletedTasks}*/
          onOpenLoginForm={handleOpenLoginForm}
          isLoggedIn={isLoggedIn}
        /*onLogout={handleLogout}*/
        />
        <div className='d-flex'>
          <TaskStatusFilter />
        </div>
        <TaskAddForm /*onAddTask={handleAddTask}*/ />
        <TaskList tasks={isTasks} />
        <PaginationPanel
          pageCount={isPageCount}
          currentPage={curentPage} />
      </div>
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closePopup}
        onLogin={handleLoginUser} />
    </>
  );
}


export default App;
