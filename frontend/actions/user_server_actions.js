import { joinServerReq, leaveServerReq } from "../util/user_server_api_util"

export const RECEIVE_USER_SERVER = "RECEIVE_USER_SERVER";
export const REMOVE_USER_SERVER = "REMOVE_USER_SERVER";

const receiveUserServer = (userServer) => {
    return {
        type: RECEIVE_USER_SERVER,
        userServer
    }
}

const removeUserServer = (server) => {
    return {
        type: REMOVE_USER_SERVER,
        server
    }
}

export const joinServer = (joinInfo) => dispatch => {
    return joinServerReq(joinInfo)
        .then(userServer => dispatch(receiveUserServer(userServer)))
}

export const leaveServer = (serverId) => dispatch => {
    return leaveServerReq(serverId)
        .then(server => dispatch(removeUserServer(server)))
}