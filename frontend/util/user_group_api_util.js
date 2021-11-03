export const addToGroupReq = (joinInfo) => {
    return $.ajax({
        url: `/api/user_groups`,
        method: "POST",
        data: {
            join_info: joinInfo
        }
    })
}