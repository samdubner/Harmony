import {
    RECEIVE_CHANNELS,
    RECEIVE_CHANNEL,
    DELETE_CHANNEL
} from "../../actions/channel_actions"

const channelsReducer = (prevState={}, action) => {
    Object.freeze(prevState);

    switch(action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, prevState, action.channels);
        case RECEIVE_CHANNEL:
            return;
        case DELETE_CHANNEL:
            return;
        default:
            return prevState;
    }
}

export default channelsReducer;