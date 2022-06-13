import { ADD_TASK } from '../utils/constants';

const tasks = (state = [], { type, id, text, username, email, status }) => {
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
