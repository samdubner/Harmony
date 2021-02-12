import {
        RECEIVE_SERVERS,
        RECEIVE_SERVER,
        DELETE_SERVER
    } from "../../actions/server_actions"

const serversReducer = (prevState={}, action) => {
    Object.freeze(prevState)
    let nextState = Object.assign({}, prevState);
    
    switch(action.type) {
        case RECEIVE_SERVERS:
            action.servers.forEach(server => {
                server = {
                    id: server.id,
                    name: server.name,
                    owner_id: server.owner_id,
                    user_ids: server.user_ids
                }
                nextState = Object.assign(nextState, {[server.id]: server})
            })
            return nextState;
        case RECEIVE_SERVER:
            const server = {
                id: action.server.id,
                name: action.server.name,
                owner_id: action.server.owner_id,
                user_ids: action.server.user_ids,
            };
            return Object.assign(nextState, {[server.id]: server});
        case DELETE_SERVER:
            delete nextState[action.server.id];
            return nextState;
        default: 
            return prevState;
    }
}

export default serversReducer;