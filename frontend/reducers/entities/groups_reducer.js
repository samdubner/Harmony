import { RECEIVE_GROUPS, RECEIVE_GROUP } from "../../actions/group_actions";

const groupsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let nextState = Object.assign({}, prevState)

  switch (action.type) {
    case RECEIVE_GROUPS:
      action.groups.forEach((group) => {
        group = {
          id: group.id,
          name: group.name,
          owner_id: group.owner_id,
        };
        nextState = Object.assign(nextState, { [group.id]: group });
      });
      return nextState;
    case RECEIVE_GROUP:
      let group = {
          id: action.group.id,
          name: action.group.name,
          owner_id: action.group.owner_id,
          users: action.group.users
      }
      return Object.assign(nextState, {[group.id]: group});
    default:
      return prevState;
  }
};

export default groupsReducer;
