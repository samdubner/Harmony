export const joinServerReq = (joinInfo) => {
    // debugger
    return $.ajax({
        url: `/api/user_servers`,
        method: "POST",
        data: {
            join_info: joinInfo
        }
    })
}