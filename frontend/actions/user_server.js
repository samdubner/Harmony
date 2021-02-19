import { joinServerReq } from "../util/user_server_api_util"

export const RECEIVE_USER_SERVER = "RECEIVE_USER_SERVER";

const receiveUserServer = (userServer) => {
    return {
        type: RECEIVE_USER_SERVER,
        userServer
    }
}

export const joinServer = (joinInfo) => dispatch => {
    return joinServerReq(joinInfo)
        .then(userServer => dispatch(receiveUserServer(userServer)))
}