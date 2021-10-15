export const getChannelMessagesReq = channel => {
    return $.ajax({
        url: `/api/channels/${channel.id}/messages`
    })
}

export const deleteMessageReq = message => {
    return $.ajax({
        url: `/api/messages/${message.id}`,
        method: "DELETE"
    })
}