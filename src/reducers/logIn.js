import { LOG_IN } from "../utils/constants";

const START_PAGE = { status: false };

const logIn = (state = START_PAGE, { type, status }) => {
  switch (type) {
    case LOG_IN:
      return { status };
    default:
      return state;
  }
}

export default logIn;
