export const fetchUserRequestsReq = user => {
    return $.ajax({
        url: `/api/users/${user}/friend_requests`,
        method: "GET"
    })
}