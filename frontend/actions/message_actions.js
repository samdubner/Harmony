import { getChannelMessagesReq, deleteMessageReq } from "../util/messages_api_util";

//Action Types
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "REVEIVE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

//Action Creators
const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

const receiveMessages = messages => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}

const removeMessage = message => {
    return {
        type: DELETE_MESSAGE,
        message
    }
}

//Thunk Action Creators
export const getChannelMessages = channel => dispatch => {
    return getChannelMessagesReq(channel)
        .then(messages => dispatch(receiveMessages(messages)))
}

export const deleteMessage = message => dispatch => {
    return deleteMessageReq(message)
        .then(message => dispatch(removeMessage(message)))
}