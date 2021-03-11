import { createCHannelReq, deleteChannelReq } from "../util/channel_api_util";

//Action Types
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const DELETE_CHANNEL = "DELETE_CHANNEL";

//Action Creators
const receiveChannel = channel => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}

const receiveChannels = channels => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}

const removeChannel = channel => {
    return {
        type: DELETE_CHANNEL,
        channel
    }
}

//Thunk Action Creators
export const getServerChannels = server => dispatch => {
    return 
}