import {
  RECEIVE_REQUESTS,
  RECEIVE_REQUEST,
} from "../../actions/friend_request_actions";

const friendRequestsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_REQUESTS:
      return prevState;
    case RECEIVE_REQUEST:
      let request = {
        id: action.request.id,
        sender_id: action.request.sender_id,
        recipient_id: action.request.recipient_id,
      };
      return Object.assign({}, prevState, { [request.id]: request });
    default:
      return prevState;
  }
};

export default friendRequestsReducer;
