import { ADD_TASK, CHANGE_FILTER } from "../utils/constants";

export const addTask = ({ id, taskText, userName, userEmail, isCompleted }) => ({
  type: ADD_TASK,
  id,
  taskText,
  userName,
  userEmail,
  isCompleted
});

export const changeFilter = ({ activeFilter, filterValue }) => ({
  type: CHANGE_FILTER,
  activeFilter,
  filterValue
})
