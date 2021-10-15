import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  DELETE_MESSAGE,
} from "../../actions/message_actions";

const messagesReducer = (prevState={}, action) => {
    Object.freeze(prevState);

    switch(action.type) {
        case RECEIVE_MESSAGES:
            return prevState;
        case RECEIVE_MESSAGE:
            return prevState;
        case DELETE_MESSAGE:
            return prevState;
        default: 
            return prevState;
    }
}

export default messagesReducer;