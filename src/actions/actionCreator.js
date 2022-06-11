export const addTask = ({ id, taskText, userName, userEmail, isCompleted }) => ({
  type: 'ADD_TASK',
  id,
  taskText,
  userName,
  userEmail,
  isCompleted
});

