export const getGroupMessagesReq = group => {
    return $.ajax({
        url: `/api/groups/${group}/messages`
    })
}