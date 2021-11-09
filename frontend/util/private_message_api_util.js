export const getGroupMessagesReq = group => {
    return $.ajax({
        url: `/api/groups/${group}/private_messages`,
        method: "GET"
    })
}

export const deletePrivateMessageReq = message => {
    return $.ajax({
        url: `/api/private_messages/${message}`,
        method: "DELETE"
    })
}