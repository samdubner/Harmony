export const getUserFriendsReq = user => {
    return $.ajax({
        url: `/api/users/${user}/friendships`,
        method: "GET"
    })
}

export const createFriendshipReq = friendship => {
    return $.ajax({
        url: `/api/friendships`,
        method: "POST",
        data: {
            friendship
        }
    })
}