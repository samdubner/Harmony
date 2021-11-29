import { RECEIVE_ALL_SERVERS } from "../../actions/server_actions";

const allServersReducer = (prevState={}, action) => {
    Object.freeze(prevState)
    let nextState = Object.assign({}, prevState)

    switch(action.type) {
        case RECEIVE_ALL_SERVERS:
            action.servers.forEach(server => {
                nextState = Object.assign(nextState, {[server.id]: server})
            })
            return nextState;
        default:
            return prevState;
    }
}

export default allServersReducer;