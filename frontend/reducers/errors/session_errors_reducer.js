import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../../actions/session_actions"

const _emptyState = {
    errors: []
}

const sessionErrorsReducer = (prevState=_emptyState, action) => {
    Object.freeze(prevState)

    switch (action.type) {
        case RECEIVE_ERRORS:
            return {errors: action.errors};
        case RECEIVE_CURRENT_USER:
            return _emptyState;
        default:
            return prevState;
    }
}

export default sessionErrorsReducer;