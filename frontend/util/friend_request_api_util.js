export const fetchUserRequestsReq = user => {
    return $.ajax({
        url: `/api/users/${user}/friend_requests`,
        method: "GET"
    })
}

export const createRequestReq = friend_request => {
    return $.ajax({
        url: "/api/friend_requests",
        method: "POST",
        data: {
            friend_request
        }
    })
}