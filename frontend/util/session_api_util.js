export const signupReq = user => {
    return $.ajax({
        url: "/api/users",
        method: "POST",
        data: {
            user
        }
    })
}

export const loginReq = user => {
    return $.ajax({
        url: "/api/session",
        method: "POST",
        data: {
            user
        }
    })
}

export const logoutReq = () => {
    return $.ajax({
        url: "/api/session",
        method: "DELETE"
    })
}

export const updateColorReq = user => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: "PUT",
        data: {
            user
        }
    })
}