import { createChannelReq, deleteChannelReq, getServerChannelsReq } from "../util/channel_api_util";

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
    return getServerChannelsReq(server)
        .then(channels => dispatch(receiveChannels(channels)))
}

export const createChannel = channelData => dispatch => {
    return createChannelReq(channelData)
        .then(channel => dispatch(receiveChannel(channel)))
}

export const deleteChannel = channelData => dispatch => {
    return deleteChannelReq(channelData)
        .then(channel => dispatch(removeChannel(channel)))
}