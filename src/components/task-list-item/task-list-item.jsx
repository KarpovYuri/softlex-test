import React, { useState } from 'react';
import { useSelector } from "react-redux";
import './task-list-item.css';

const TaskListItem = ({ id, text, username, email, status, onEditTask }) => {

  const isLogdIn = useSelector(state => state.logIn).status;


  const [isText, setIsText] = useState(text);
  const [isStatus, setIsStatus] = useState(status);


  // Установка имени пользователя
  function handleChangeText(event) {
    setIsText(event.target.value);
  }

  // Редактироавние текста
  function handleEditText(text) {
    switch (status) {
      case 0:
        status = 1;
        break;
      case 10:
        status = 11;
        break;
    }
    onEditTask({ id, text, status });
  }


  // Редактироавние статуса
  function handleEditStatus(status) {
    switch (status) {
      case 0:
        setIsStatus(10);
        status = 10;
        break;
      case 1:
        setIsStatus(11);
        status = 11;
        break;
      case 10:
        setIsStatus(0);
        status = 0;
        break;
      case 11:
        setIsStatus(1);
        status = 1;
        break;
    }

    onEditTask({ id, text: isText, status });
  }


  return (
    <div className='row d-flex align-items-center'>
      <div className="input-grp col-12 col-md-5">
        <input
          value={isText || ''}
          onChange={handleChangeText}
          className={`input text-hidden ${isLogdIn ? '' : 'border-none'}`}
          disabled={isLogdIn ? '' : 'disabled'}
        ></input>
        <button
          onClick={() => { handleEditText(isText) }}
          className={`btn btn-outline-secondary shadow-none ms-2 ${isLogdIn ? '' : 'hide'}`}
        >
          Save
        </button>
      </div>
      <span className='text-hidden col-6 col-sm-5 col-md-3 mt-2 mt-sm-0'>{username}</span>
      <span className='text-hidden col-6 col-sm-5 col-md-3 mt-2 mt-sm-0'>{email}</span>
      <button
        disabled={isLogdIn ? '' : 'disabled'}
        onClick={() => { handleEditStatus(status) }}
        className={`btn-status offset-9 col-3 offset-sm-0 col-sm-2 col-md-1 mt-3 mt-sm-0 px-2 py-1 bg-opacity-10 border
      ${isStatus === 10 || isStatus === 11 ? 'text-success bg-success border-success' : 'text-warning bg-warning border-warning'}`}>
        {isStatus === 10 || isStatus === 11 ? 'Done' : 'Active'}
      </button>
    </div >
  )
}

export default TaskListItem;
