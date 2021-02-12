import {
        RECEIVE_SERVERS,
        RECEIVE_SERVER,
        DELETE_SERVER
    } from "../../actions/server_actions"

const serversReducer = (prevState={}, action) => {
    Object.freeze(prevState)

    switch(action.type) {
        default: 
            return prevState;
    }
}

export default serversReducer;