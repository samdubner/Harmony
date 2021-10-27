export const getGroupMessagesReq = group => {
    return $.ajax({
        url: `/api/groups/${group}/private_messages`,
        method: "GET"
    })
}