import { RECEIVE_FRIENDS, RECEIVE_FRIEND } from "../../actions/friendship_actions";

const friendshipsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_FRIEND:
      return prevState;
    case RECEIVE_FRIENDS:
      return prevState;
    default:
      return prevState;
  }
};

export default friendshipsReducer;
