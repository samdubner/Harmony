import {
    RECEIVE_GROUPS
} from "../../actions/server_actions"
import serversReducer from "./servers_reducer"

const groupsReducer = (prevState={}, action) => {
    Object.freeze(prevState)

    switch(action.type) {
        default:
            return prevState;
    }
}

export default serversReducer;