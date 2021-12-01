import {
        RECEIVE_SERVERS,
        RECEIVE_SERVER,
        DELETE_SERVER
    } from "../../actions/server_actions"

import { REMOVE_USER_SERVER } from "../../actions/user_server_actions";

const serversReducer = (prevState={}, action) => {
    Object.freeze(prevState)
    let nextState = Object.assign({}, prevState);
    
    switch(action.type) {
        case RECEIVE_SERVERS:
            let newState = {}
            action.servers.forEach(server => {
                server = {
                    id: server.id,
                    name: server.name,
                    owner_id: server.owner_id,
                    invite: server.invite,
                    users: server.users
                }
                newState = Object.assign(newState, { [server.id]: server });
            })
            return newState;
        case RECEIVE_SERVER:
            const server = {
                id: action.server.id,
                name: action.server.name,
                owner_id: action.server.owner_id,
                users: action.server.users,
                invite: action.server.invite,
                channels: action.server.channels
            };
            return Object.assign(nextState, {[server.id]: server});
        case DELETE_SERVER:
            delete nextState[action.server.id];
            return nextState;
        case REMOVE_USER_SERVER:
            delete nextState[action.server.id]
            return nextState;
        default: 
            return prevState;
    }
}

export default serversReducer;