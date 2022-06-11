import React, { useState } from 'react';
import * as actions from '../../actions/actionCreator';
import { useDispatch } from "react-redux";
import './task-add-form.css';


const TaskAddForm = () => {

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
    dispatch(actions.addTask({
      id: (new Date()).getTime(),
      taskText: isTaskText,
      userName: isUserName,
      userEmail: isUserEmail,
      isCompleted: false
    }));
    setIsTaskText('');
    setIsUserName('');
    setIsUserEmail('');
  }


  return (
    <form
      className='d-flex mt-4'
      onClick={handleTaskSubmit}>
      <input
        className='form-control me-1'
        type='text'
        placeholder='Task'
        value={isTaskText}
        onChange={handleTaskTextChange}
      />
      <input
        className='form-control me-1'
        type='text'
        placeholder='Name'
        value={isUserName}
        onChange={handleUserNameChange}
      />
      <input
        className='form-control me-1'
        type='text'
        placeholder='E-mail'
        value={isUserEmail}
        onChange={handleUserEmailChange}
      />
      <button
        className='btn btn-outline-secondary'
        type='submit'>
        Add
      </button>
    </form>
  )
}

export default TaskAddForm;
