import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { changeFilter, showPage } from '../../actions/actionCreator';
import { FILTERS_BTN } from '../../utils/constants'
import './task-status-filter.css';

const TaskStatusFilter = () => {

  const [isUserName, setIsUserName] = useState('');
  const [isUserEmail, setIsUserEmail] = useState('');
  const dispatch = useDispatch();


  const handleUserNameChange = (evt) => {
    setIsUserName(evt.target.value);
  }


  const handleUserEmailChange = (evt) => {
    setIsUserEmail(evt.target.value);
  }


  const handleChangeFilter = (activeFilter) => {
    dispatch(changeFilter(activeFilter));
    dispatch(showPage({ activePage: 0 }));
    setIsUserName('');
    setIsUserEmail('');
  }


  return (
    <div className='d-flex justify-content-center flex-wrap flex-md-nowrap'>
      <div className='input-group me-md-3'>
        <input
          type='text'
          className='form-control shadow-none'
          placeholder='Filter by name'
          value={isUserName}
          onChange={handleUserNameChange}
        >
        </input>
        <button
          className='btn btn-secondary input-group-btn shadow-none'
          onClick={() => { handleChangeFilter({ activeFilter: 'name', filterValue: isUserName }) }}
        >
          Name
        </button>
      </div>
      <div className='input-group me-md-4 mt-2 mt-md-0'>
        <input
          type='email'
          className='form-control shadow-none'
          placeholder='Filter by email'
          value={isUserEmail}
          onChange={handleUserEmailChange}
        >
        </input>
        <button
          className='btn btn-secondary input-group-btn shadow-none'
          onClick={() => { handleChangeFilter({ activeFilter: 'email', filterValue: isUserEmail }) }}
        >
          E-mail
        </button>
      </div>
      <div className='btn-group  mt-2 mt-md-0'>
        {FILTERS_BTN.map(({ text, activeFilter }) => (
          <button
            onClick={() => { handleChangeFilter({ activeFilter, filterValue: '' }) }}
            key={activeFilter}
            className='btn btn-outline-secondary shadow-none'
          >{text}</button>
        ))}
      </div>
    </div>
  )
}

export default TaskStatusFilter;
