export const joinServerReq = (joinInfo) => {
    return $.ajax({
        url: `/api/user_servers`,
        method: "POST",
        data: {
            join_info: joinInfo
        }
    })
}