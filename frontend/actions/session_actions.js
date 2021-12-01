import { signupReq, loginReq, logoutReq, updateColorReq } from "../util/session_api_util"

//Action Types
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_SESSION_ERRORS"

//Regular Action Creators
const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors: errors.responseJSON
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

//Thunk Action Creators
export const login = formUser => dispatch => {
    return loginReq(formUser)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(err => dispatch(receiveErrors(err)));
}

export const logout = () => dispatch => {
    return logoutReq()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(err => dispatch(receiveErrors(err)))
}

export const signup = formUser => dispatch => {
    return signupReq(formUser)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(err => dispatch(receiveErrors(err)))
}

export const updateColor = userInfo => dispatch => {
    return updateColorReq(userInfo)
        .then(user => dispatch(receiveCurrentUser(user)))
}