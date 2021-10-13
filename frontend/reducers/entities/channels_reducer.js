import {
    RECEIVE_CHANNELS,
    RECEIVE_CHANNEL,
    DELETE_CHANNEL
} from "../../actions/channel_actions"

const channelsReducer = (prevState={}, action) => {
    Object.freeze(prevState);

    switch(action.type) {
        case RECEIVE_CHANNELS:
            let newState = {}
            for (let [key, channel] of Object.entries(action.channels)) {
                newState = Object.assign({}, newState, channel)
            }
            return newState;
        case RECEIVE_CHANNEL:
            let channel = {
                id: action.channel.id,
                name: action.channel.name,
                server_id: action.channel.server_id
            }
            return Object.assign({}, prevState, {[action.channel.id]: channel})
        case DELETE_CHANNEL:
            console.log(action.channel)
            return;
        default:
            return prevState;
    }
}

export default channelsReducer;