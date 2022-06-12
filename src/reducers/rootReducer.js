import { combineReducers } from "redux";
import addTasks from './addTasks';
import filters from './filters';
import showPage from './showPage';

const rootReducer = combineReducers({ addTasks, filters, showPage });

export default rootReducer;
