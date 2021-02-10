import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions"

const _nullState = {
    id: null
}

const sessionReducer = (prevState=_nullState, action) => {
    Object.freeze(prevState)

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id }
        case LOGOUT_CURRENT_USER:
            return _nullState;
        default:
            return prevState;
    }
}

export default sessionReducer;