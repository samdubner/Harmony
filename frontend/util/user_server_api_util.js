export const joinServerReq = (joinInfo) => {
    return $.ajax({
        url: `/api/user_servers`,
        method: "POST",
        data: {
            join_info: joinInfo
        }
    })
}

export const leaveServerReq = (leaveInfo) => {
    return $.ajax({
        url: `/api/user_servers/${leaveInfo.server_id}`,
        method: "DELETE",
        data: {
            leaveInfo 
        }
    })
}