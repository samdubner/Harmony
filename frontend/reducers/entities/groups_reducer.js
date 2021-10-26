import { RECEIVE_GROUPS, RECEIVE_GROUP } from "../../actions/group_actions";

const groupsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_GROUPS:
      let newState = {};
      action.groups.forEach((group) => {
        group = {
          id: group.id,
          name: group.name,
          owner_id: group.owner_id,
        };
        newState = Object.assign(newState, { [group.id]: group });
      });
      return newState;
    case RECEIVE_GROUP:
      return prevState;
    default:
      return prevState;
  }
};

export default groupsReducer;
