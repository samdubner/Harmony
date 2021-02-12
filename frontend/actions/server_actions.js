import {
  getUserServersReq,
  createServerReq,
  serverInfoReq,
  updateServerReq,
  deleteServerReq,
} from "../util/server_api_util";

//Action Typess
export const RECEIVE_SERVER = "RECEIVE_SERVER"
export const RECEIVE_SERVERS = "RECEIVE_SERVERS"
export const DELETE_SERVER = "DELETE_SERVER"

//Regular Action Creators
const receiveServer = server => {
    return {
        type: RECEIVE_SERVER,
        server
    }
}

const receiveServers = servers => {
    return {
        type: RECEIVE_SERVERS,
        servers
    }
}

const removeServer = server => {
    return {
        type: DELETE_SERVER,
        server
    }
}

//Thunk Action Creators
export const getUserServers = user => dispatch => {
    return getUserServersReq(user)
        .then(servers => dispatch(receiveServers(servers)))
}

export const createServer = (serverData) => (dispatch) => {
    return createServerReq(serverData)
        .then(server => dispatch(receiveServer(server)));
};

export const serverInfo = serverData => dispatch => {
    return serverInfoReq(serverData)
        .then(server => dispatch(receiveServer(server)));
}

export const updateServer = serverData => (dispatch) => {
    return updateServerReq(serverData)
        .then(server => dispatch(receiveServer(server)));
};

export const deleteServer = serverData => dispatch => {
    return deleteServerReq(serverData)
        .then(server => dispatch(removeServer(server)))
}