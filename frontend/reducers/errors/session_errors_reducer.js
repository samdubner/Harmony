import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../../actions/session_actions"

const sessionErrorsReducer = (prevState, action) => {
    Object.freeze(prevState)

    switch (action.type) {
        default:
            return prevState;
    }
}

export default sessionErrorsReducer;