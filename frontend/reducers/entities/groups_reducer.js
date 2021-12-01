import {
  RECEIVE_GROUPS,
  RECEIVE_GROUP,
  REMOVE_GROUP,
} from "../../actions/group_actions";
import { REMOVE_USER_GROUP } from "../../actions/user_group_actions";

const groupsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let nextState = Object.assign({}, prevState);

  switch (action.type) {
    case RECEIVE_GROUPS:
      let blank = {};
      action.groups.forEach((group) => {
        group = {
          id: group.id,
          name: group.name,
          owner_id: group.owner_id,
          users: group.users,
        };
        blank = Object.assign(blank, { [group.id]: group });
      });
      return blank;
    case RECEIVE_GROUP:
      let group = {
        id: action.group.id,
        name: action.group.name,
        owner_id: action.group.owner_id,
        users: action.group.users,
      };
      return Object.assign(nextState, { [group.id]: group });
    case REMOVE_GROUP:
      delete nextState[action.group.id];
      return nextState;
    case REMOVE_USER_GROUP:
      delete nextState[action.group.id];
      return nextState;
    default:
      return prevState;
  }
};

export default groupsReducer;
