import {
  getUserServersReq,
  createServerReq,
  serverInfoReq,
  updateServerReq,
  deleteServerReq,
  getAllServersReq
} from "../util/server_api_util";

//Action Types
export const RECEIVE_SERVER = "RECEIVE_SERVER"
export const RECEIVE_SERVERS = "RECEIVE_SERVERS"
export const DELETE_SERVER = "DELETE_SERVER"

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS"

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

const receiveAllServers = servers => {
    return {
        type: RECEIVE_ALL_SERVERS,
        servers
    }
}

//Thunk Action Creators
export const getUserServers = user => dispatch => {
    return getUserServersReq(user)
        .then(servers => dispatch(receiveServers(servers)))
}

export const getAllServers = () => dispatch => {
    return getAllServersReq()
        .then(servers => dispatch(receiveAllServers(servers)))
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