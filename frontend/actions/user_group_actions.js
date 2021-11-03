import { addToGroupReq } from "../util/user_group_api_util"

export const joinGroup = (joinInfo) => dispatch => {
    return addToGroupReq(joinInfo)
}