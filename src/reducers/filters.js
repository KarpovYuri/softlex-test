import { CHANGE_FILTER } from "../utils/constants";

const BASE_FILTER = { activeFilter: 'all', filterValue: '' };

const filter = (state = BASE_FILTER, { type, activeFilter, filterValue }) => {
  switch (type) {
    case CHANGE_FILTER:
      return { activeFilter, filterValue };
    default:
      return state;
  }
}

export default filter;
