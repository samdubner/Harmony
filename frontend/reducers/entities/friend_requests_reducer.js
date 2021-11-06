import {
  RECEIVE_REQUESTS,
  RECEIVE_REQUEST,
  DELETE_REQUEST
} from "../../actions/friend_request_actions";

const friendRequestsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  
  switch (action.type) {
    case RECEIVE_REQUESTS:
      let newState = {}
      for (let request of action.requests) {
        newState = Object.assign(newState, {[request.id]: request})
      }
      return newState;
    case RECEIVE_REQUEST:
      let request = {
        id: action.request.id,
        sender_id: action.request.sender_id,
        recipient_id: action.request.recipient_id,
      };
      return Object.assign({}, prevState, { [request.id]: request });
    case DELETE_REQUEST:
      let nextState = Object.assign({}, prevState)
      delete nextState[action.request.id]
      return nextState;
    default:
      return prevState;
  }
};

export default friendRequestsReducer;
