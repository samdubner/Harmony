import { addToGroupReq, leaveGroupReq } from "../util/user_group_api_util"

export const REMOVE_USER_GROUP = "REMOVE_USER_GROUP"

const removeUserGroup = (group) => {
    return {
        type: REMOVE_USER_GROUP,
        group
    }
}

export const joinGroup = (joinInfo) => dispatch => {
    return addToGroupReq(joinInfo)
}

export const leaveGroup = (leaveInfo) => dispatch => {
    return leaveGroupReq(leaveInfo)
        .then(group => dispatch(removeUserGroup(group)))
}