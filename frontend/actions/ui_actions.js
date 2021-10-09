export const SET_MODAL = "SET_SERVER_MODAL";
export const SET_CURRENT_INVITE = "SET_CURRENT_INVITE"
export const SET_CURRENT_SERVER = "SET_CURRENT_SERVER"

export const setModal = (state) => {
    return {
        type: SET_MODAL,
        state
    }
}

export const setCurrentInvite = (invite) => {
    return {
        type: SET_CURRENT_INVITE,
        invite
    }
}

export const setCurrentServer = (server) => {
    return {
        type: SET_CURRENT_SERVER,
        server
    }
}