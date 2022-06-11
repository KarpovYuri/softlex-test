import React from 'react';
import { useDispatch } from "react-redux";
import { changeFilter } from '../../actions/actionCreator';
import { FILTERS_BTN } from '../../utils/constants'
import './task-status-filter.css';

const TaskStatusFilter = () => {

  const dispatch = useDispatch();

  const handleChangeFilter = (activeFilter) => {
    dispatch(changeFilter(activeFilter));
  }

  return (
    <>
      <div className="input-group me-2">
        <div className="input-group-text">Name</div>
        <input type="text" className="form-control"></input>
      </div>
      <div className="input-group me-2">
        <div className="input-group-text">E-mail</div>
        <input type="text" className="form-control"></input>
      </div>
      <div className='btn-group'>
        {FILTERS_BTN.map(({ text, id }) => (
          <button
            onClick={() => { handleChangeFilter(id) }}
            key={id}
            className='btn btn-outline-secondary'
          >{text}</button>
        ))}
      </div>
    </>
  )
}

export default TaskStatusFilter;
