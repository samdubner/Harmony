import { getUserGroupsReq, createGroupReq, groupInfoReq } from "../util/group_api_util";

//Action Types
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";

//Action Creators
const receiveGroups = (groups) => {
  return {
    type: RECEIVE_GROUPS,
    groups,
  };
};

const receiveGroup = (group) => {
  return {
    type: RECEIVE_GROUP,
    group,
  };
};

//Thunk Action Creators
export const getUserGroups = (user) => (dispatch) => {
  return getUserGroupsReq(user).then((groups) =>
    dispatch(receiveGroups(groups))
  );
};

export const createGroup = (groupData) => dispatch => {
    return createGroupReq(groupData)
        .then(group => dispatch(receiveGroup(group)))
}


export const getGroupInfo = (groupData) => dispatch => {
  return groupInfoReq(groupData)
    .then(group => dispatch(receiveGroup(group)))
}