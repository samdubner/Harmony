import {
  RECEIVE_FRIENDS,
  RECEIVE_FRIEND,
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
    default:
      return prevState;
  }
};

export default friendshipsReducer;
