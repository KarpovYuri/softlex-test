import { CHANGE_FILTER } from "../utils/constants";

const BASE_FILTER = { activeFilter: 'default' };

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return { activeFilter };
    default:
      return state;
  }
}

export default filter;
