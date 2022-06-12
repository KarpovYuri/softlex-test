import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask, changeFilter } from '../../actions/actionCreator';
import './task-add-form.css';


const TaskAddForm = ({ onAddTask }) => {

  const [isTaskText, setIsTaskText] = useState('');
  const [isUserName, setIsUserName] = useState('');
  const [isUserEmail, setIsUserEmail] = useState('');
  const dispatch = useDispatch();


  const handleTaskTextChange = (evt) => {
    setIsTaskText(evt.target.value);
  }


  const handleUserNameChange = (evt) => {
    setIsUserName(evt.target.value);
  }


  const handleUserEmailChange = (evt) => {
    setIsUserEmail(evt.target.value);
  }


  const handleTaskSubmit = (evt) => {
    evt.preventDefault();
    //onAddTask({
    // text: isTaskText,
    // username: isUserName,
    // email: isUserEmail
    //})
    dispatch(addTask({
      id: (new Date()).getTime(),
      taskText: isTaskText,
      userName: isUserName,
      userEmail: isUserEmail,
      isCompleted: 0
    }));
    dispatch(changeFilter({
      id: 'all',
      filterValue: ''
    }));
    setIsTaskText('');
    setIsUserName('');
    setIsUserEmail('');
  }


  return (
    <form
      className='d-flex flex-wrap flex-md-nowrap mt-4'
      name='addForm'
      onSubmit={handleTaskSubmit}>
      <input
        value={isTaskText || ''}
        className='form-control shadow-none me-md-2 mt-1 mt-md-0'
        type='text'
        placeholder='Task'
        name="tasktext"
        onChange={handleTaskTextChange}
        autoComplete="off"
        required
        minLength={2}
      />
      <input
        value={isUserName || ''}
        className='form-control shadow-none me-md-2 mt-1 mt-md-0'
        type='text'
        placeholder='Name'
        name="username"
        onChange={handleUserNameChange}
        autoComplete="off"
        required
        minLength={2}
      />
      <input
        value={isUserEmail || ''}
        className='form-control shadow-none me-md-3 mt-1 mt-md-0'
        type='email'
        placeholder='E-mail'
        name="email"
        onChange={handleUserEmailChange}
        autoComplete="off"
        required
      />
      <button
        className='btn btn-secondary shadow-none mt-2 mt-md-0'
        type="submit">
        Add
      </button>
    </form>
  )
}

export default TaskAddForm;
