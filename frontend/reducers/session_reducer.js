import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions"

const sessionReducer = (prevState={}, action) => {
    Object.freeze(prevState)

    switch(action) {
        default:
            return prevState;
    }
}

export default sessionReducer;