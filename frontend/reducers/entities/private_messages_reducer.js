import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  DELETE_MESSAGE,
} from "../../actions/message_actions";

import {
  RECEIVE_PRIVATE_MESSAGE,
  RECEIVE_PRIVATE_MESSAGES,
} from "../../actions/private_message_actions";

const privateMessagesReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_PRIVATE_MESSAGES:
      let nextState = {};
      for (let message of action.messages) {
        let newMessage = {
          id: message.id,
          content: message.content,
          author: message.owner_id,
          createdAt: message.created_at,
        };
        nextState = Object.assign(nextState, { [message.id]: newMessage });
      }
      return nextState;
    case RECEIVE_PRIVATE_MESSAGE:
      let message = {
        id: action.message.id,
        content: action.message.content,
        author: action.message.owner_id,
        createdAt: action.message.created_at,
      };
      return Object.assign({}, prevState, { [message.id]: message });
    // case DELETE_MESSAGE:
    //   let newState = Object.assign({}, prevState);
    //   delete newState[action.message.id];
    //   return newState;
    default:
      return prevState;
  }
};

export default privateMessagesReducer;
