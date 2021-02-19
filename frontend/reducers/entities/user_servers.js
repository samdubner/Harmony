import { RECEIVE_USER_SERVER } from "../../actions/user_server"

const userServersReducer = (prevState={}, action) => {
    Object.freeze(prevState)

    switch(action.type) {
        case RECEIVE_USER_SERVER:
            return Object.assign({}, prevState, {[action.userServer.id]: action.userServer});
        default:
            return prevState;
    }
}

export default userServersReducer;