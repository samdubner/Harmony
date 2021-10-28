import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_SERVERS, RECEIVE_SERVER } from "../../actions/server_actions";
import { RECEIVE_GROUPS, RECEIVE_GROUP } from "../../actions/group_actions"

const usersReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let nextState = Object.assign({}, prevState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const user = { [action.user.id]: action.user };
      return Object.assign({}, prevState, user);
    case RECEIVE_SERVER:
      for (let user of Object.values(action.server.users)) {
        nextState = Object.assign(nextState, { [user.id]: user });
      }
      return nextState;
    case RECEIVE_GROUP:
        for (let user of Object.values(action.group.users)) {
            nextState = Object.assign(nextState, { [user.id]: user });
        }
      return nextState;
    default:
      return prevState;
  }
};

export default usersReducer;
