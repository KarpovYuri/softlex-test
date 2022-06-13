import { ADD_TASK, CHANGE_FILTER, SHOW_PAGE } from "../utils/constants";

export const addTask = ({ id, text, username, email, status }) => ({
  type: ADD_TASK,
  id,
  text,
  username,
  email,
  status
});

export const changeFilter = ({ activeFilter, filterValue }) => ({
  type: CHANGE_FILTER,
  activeFilter,
  filterValue
})

export const showPage = ({ activePage }) => ({
  type: SHOW_PAGE,
  activePage
})
