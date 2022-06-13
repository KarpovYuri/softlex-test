import { combineReducers } from "redux";
import addTasks from './addTasks';
import filters from './filters';
import showPage from './showPage';
import logIn from './logIn';

const rootReducer = combineReducers({ addTasks, filters, showPage, logIn });

export default rootReducer;
