import { RECEIVE_CURRENT_USER } from "../../actions/session_actions"
import {
  RECEIVE_SERVERS,
  RECEIVE_SERVER
} from "../../actions/server_actions";

const usersReducer = (prevState={}, action) => {
    Object.freeze(prevState);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            const user = {[action.user.id]: action.user}
            return Object.assign({}, prevState, user)
        case RECEIVE_SERVERS:
            let nextState = Object.assign({}, prevState)
            action.servers.forEach(server => {
                nextState = Object.assign(nextState, server.users)
            })
            return nextState;
        case RECEIVE_SERVER:
            return Object.assign({}, prevState, action.server.users)
        default:
            return prevState;
    }
}

export default usersReducer;