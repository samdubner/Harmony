import {
    RECEIVE_GROUPS,
    RECEIVE_GROUP
} from "../../actions/group_actions"

const groupsReducer = (prevState={}, action) => {
    Object.freeze(prevState)

    switch(action.type) {
        case RECEIVE_GROUPS:
            return prevState;
        case RECEIVE_GROUP:
            return prevState;
        default:
            return prevState;
    }
}

export default groupsReducer;