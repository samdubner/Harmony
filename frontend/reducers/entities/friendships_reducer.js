import {
  RECEIVE_FRIENDS,
  RECEIVE_FRIEND,
  REMOVE_FRIEND
} from "../../actions/friendship_actions";

const friendshipsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_FRIEND:
      return Object.assign({}, prevState, {
        [action.friend.id]: action.friend,
      });
      return prevState;
    case RECEIVE_FRIENDS:
      let nextState = {}
      for (let friend of action.friends) {
        nextState = Object.assign(nextState, {[friend.id]: friend})
      }
      return nextState;
    case REMOVE_FRIEND:
      let newState = Object.assign({}, prevState)
      delete newState[action.friend.id]
      return newState;
    default:
      return prevState;
  }
};

export default friendshipsReducer;
