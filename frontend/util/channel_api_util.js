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
        url: `/api/channels/${channel.id}`,
        method: "DELETE"
    })
}