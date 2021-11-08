import {
  getGroupMessagesReq,
  deletePrivateMessageReq,
} from "../util/private_message_api_util";

//Action Types
export const RECEIVE_PRIVATE_MESSAGES = "RECEIVE_PRIVATE_MESSAGES";
export const RECEIVE_PRIVATE_MESSAGE = "RECEIVE_PRIVATE_MESSAGE";
export const DELETE_PRIVATE_MESSAGE = "DELETE_PRIVATE_MESSAGE";

//Action Creators
const receivePrivateMessages = (messages) => {
  return {
    type: RECEIVE_PRIVATE_MESSAGES,
    messages,
  };
};

export const receivePrivateMessage = (message) => {
  return {
    type: RECEIVE_PRIVATE_MESSAGE,
    message,
  };
};

export const removePrivateMessage = (message) => {
  return {
    type: DELETE_PRIVATE_MESSAGE,
    message,
  };
};

//Thunk Action Creators
export const getGroupMessages = (group) => (dispatch) => {
  return getGroupMessagesReq(group).then((messages) =>
    dispatch(receivePrivateMessages(messages))
  );
};

export const deletePrivateMessage = (message) => (dispatch) => {
  return deletePrivateMessageReq(message).then((message) =>
    dispatch(removePrivateMessage(message))
  );
};
