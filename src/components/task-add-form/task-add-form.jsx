import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask, changeFilter } from '../../actions/actionCreator';
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
    dispatch(addTask({
      id: (new Date()).getTime(),
      taskText: isTaskText,
      userName: isUserName,
      userEmail: isUserEmail,
      isCompleted: false
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
      name='addForm'>
      <input
        className='form-control shadow-none me-md-2 mt-1 mt-md-0'
        type='text'
        placeholder='Task'
        value={isTaskText}
        onChange={handleTaskTextChange}
        required
        minLength={2}
      />
      <input
        className='form-control shadow-none me-md-2 mt-1 mt-md-0'
        type='text'
        placeholder='Name'
        value={isUserName}
        onChange={handleUserNameChange}
        required
        minLength={2}
      />
      <input
        className='form-control shadow-none me-md-3 mt-1 mt-md-0'
        type='text'
        placeholder='E-mail'
        value={isUserEmail}
        onChange={handleUserEmailChange}
        required
        minLength={2}
      />
      <button
        className='btn btn-secondary shadow-none mt-2 mt-md-0'
        type="submit"
        onClick={handleTaskSubmit}>
        Add
      </button>
    </form>
  )
}

export default TaskAddForm;
