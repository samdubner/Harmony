import { RECEIVE_CURRENT_USER } from "../../actions/session_actions"

const usersReducer = (prevState={}, action) => {
    Object.freeze(prevState);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            const user = {[action.user.id]: action.user}
            return Object.assign({}, prevState, user)
        default:
            return prevState;
    }
}

export default usersReducer;