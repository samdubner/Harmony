import { getGroupMessagesReq } from "../util/private_message_api_util"

//Action Types
export const RECEIVE_PRIVATE_MESSAGES = "RECEIVE_PRIVATE_MESSAGES"
export const RECEIVE_PRIVATE_MESSAGE = "RECEIVE_PRIVATE_MESSAGE"

//Action Creators
const receivePrivateMessages = messages => {
    return {
        type: RECEIVE_PRIVATE_MESSAGES,
        messages
    }
} 

const receivePrivateMessage = message => {
    return {
        type: RECEIVE_PRIVATE_MESSAGE,
        message
    }
}

//Thunk Action Creators
export const getGroupMessages = group => dispatch => {
    return getGroupMessagesReq(group)
        .then(messages => dispatch(receivePrivateMessages(messages)))
}