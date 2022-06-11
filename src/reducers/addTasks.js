import { ADD_TASK, initialState } from '../utils/constants';

const tasks = (state = initialState, { type, id, taskText, userName, userEmail, isCompleted }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state, { id, taskText, userName, userEmail, isCompleted }
      ];
    default:
      return state;
  }
}

export default tasks;
