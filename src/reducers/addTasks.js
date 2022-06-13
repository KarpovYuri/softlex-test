import { ADD_TASK, initialState } from '../utils/constants';

const tasks = (state = initialState, { type, id, text, username, email, status }) => {
  console.log(type, id, text, username, email, status);
  switch (type) {
    case ADD_TASK:
      return [
        ...state, { id, text, username, email, status }
      ];
    default:
      return state;
  }
}

export default tasks;
