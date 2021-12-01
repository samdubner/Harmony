export const addToGroupReq = (joinInfo) => {
    return $.ajax({
        url: `/api/user_groups`,
        method: "POST",
        data: {
            join_info: joinInfo
        }
    })
}

export const leaveGroupReq = (leaveInfo) => {
    return $.ajax({
        url: `/api/user_groups/${leaveInfo.group_id}`,
        method: "DELETE",
        data: {
            leaveInfo
        }
    })
}