export const getUserServersReq = user => {
    return $.ajax({
        url: `/api/users/${user.id}/servers`,
        method: "GET",
    })
}

export const getAllServers = () => {
    return $.ajax({
        url: `/api/all_servers`,
        method: "GET",
    })
}

export const createServerReq = server => {
    return $.ajax({
        url: "/api/servers",
        method: "POST",
        data: {
            server
        }
    })
}

export const serverInfoReq = server => {
    return $.ajax({
        url: `/api/servers/${server.id}`,
        method: "GET"
    })
}

export const updateServerReq = server => {
    return $.ajax({
        url: `/api/servers/${server.id}`,
        method: "PATCH",
        data: {
            server
        }
    })
}

export const deleteServerReq = server => {
    return $.ajax({
        url: `/api/servers/${server.id}`,
        method: "DELETE"
    })
}