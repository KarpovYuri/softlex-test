import { SHOW_PAGE } from "../utils/constants";

const START_PAGE = { activePage: 0, };

const showPage = (state = START_PAGE, { type, activePage }) => {
  switch (type) {
    case SHOW_PAGE:
      return { activePage };
    default:
      return state;
  }
}

export default showPage;
