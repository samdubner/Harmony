import { getUserGroupsReq } from "../util/group_api_util";

//Action Types
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";

//Action Creators
const receiveGroups = groups => {
    return {
        type: RECEIVE_GROUPS,
        groups
    }
}

//Thunk Action Creators
export const getUserGroups = user => dispatch => {
    return getUserGroupsReq(user)
        .then(groups => dispatch(receiveGroups(groups)))
}