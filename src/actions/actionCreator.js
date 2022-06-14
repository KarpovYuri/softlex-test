import { ADD_TASK, CHANGE_FILTER, SHOW_PAGE, LOG_IN } from "../utils/constants";

export const addTask = ({ text, username, email, status }) => ({
  type: ADD_TASK,
  text,
  username,
  email,
  status
});

export const changeFilter = ({ activeFilter }) => ({
  type: CHANGE_FILTER,
  activeFilter
});

export const showPage = ({ activePage }) => ({
  type: SHOW_PAGE,
  activePage
});

export const logIn = ({ status }) => ({
  type: LOG_IN,
  status
})
