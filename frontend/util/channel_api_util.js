export const getServerChannelsReq = server => {
    return $.ajax({
        url: `/api/servers/${server.id}/channels`,
        method: "GET"
    })
}

export const createChannelReq = channel => {
    return $.ajax({
        url: "/api/channels",
        method: "POST",
        data: {
            channel
        }
    })
}

export const deleteChannelReq = channel => {
    return $.ajax({
        url: `/api/channels/${channel}`,
        method: "DELETE"
    })
}