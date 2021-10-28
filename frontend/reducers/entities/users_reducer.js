import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_SERVERS, RECEIVE_SERVER } from "../../actions/server_actions";
import { RECEIVE_GROUP } from "../../actions/group_actions"

const usersReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let blankState = {};

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const user = { [action.user.id]: action.user };
      return Object.assign({}, prevState, user);
    case RECEIVE_SERVER:
      for (let user of Object.values(action.server.users)) {
        Object.assign(blankState, { [user.id]: user });
      }
      return blankState;
    case RECEIVE_GROUP:
        for (let user of Object.values(action.group.users)) {
            Object.assign(blankState, { [user.id]: user });
        }
      return blankState;
    default:
      return prevState;
  }
};

export default usersReducer;
