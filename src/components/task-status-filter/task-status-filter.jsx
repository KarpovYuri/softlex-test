import { useDispatch } from "react-redux";
import { changeFilter, showPage } from '../../actions/actionCreator';
import { FILTERS_BTN } from '../../utils/constants'
import './task-status-filter.css';

const TaskStatusFilter = () => {


  const dispatch = useDispatch();

  const handleChangeFilter = (activeFilter) => {
    dispatch(changeFilter(activeFilter));
    dispatch(showPage({ activePage: 0 }));
  }


  return (
    <div className='w-100 d-flex justify-content-center btn-group  mt-2 mt-md-0'>
      {FILTERS_BTN.map(({ text, activeFilter }) => (
        <button
          onClick={() => { handleChangeFilter({ activeFilter }) }}
          key={activeFilter}
          className='btn btn-outline-secondary shadow-none'
        >{text}</button>
      ))}
    </div>
  )
}

export default TaskStatusFilter;
