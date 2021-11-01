import { RECEIVE_REQUESTS } from "../../actions/friend_request_actions";

const friendRequestsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_REQUESTS:
      return prevState;
    default:
      return prevState;
  }
};

export default friendRequestsReducer;
