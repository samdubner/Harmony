import {
    RECEIVE_CHANNELS,
    RECEIVE_CHANNEL,
    DELETE_CHANNEL
} from "../../actions/channel_actions"

const channelsReducer = (prevState={}, action) => {
    Object.freeze(prevState);

    switch(action.type) {
        case RECEIVE_CHANNELS:
            // console.log(action.channels)
            return Object.assign({}, prevState, action.channels);
        case RECEIVE_CHANNEL:
            // console.log(action.channel)
            return Object.assign({}, prevState, action.channel);
        case DELETE_CHANNEL:
            console.log(action.channel)
            return;
        default:
            return prevState;
    }
}

export default channelsReducer;