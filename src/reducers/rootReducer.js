import { combineReducers } from "redux";
import addTasks from './addTasks';
import filters from './filters';

const rootReducer = combineReducers({ addTasks, filters });

export default rootReducer;
