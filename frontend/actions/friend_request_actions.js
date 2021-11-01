import { fetchUserRequestsReq } from "../util/friend_request_api_util";

//Action Types
export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS"


//Action Creators
const receiveRequests = requests => {
    return {
        type: RECEIVE_REQUESTS,
        requests
    }
}

//Thunk Action Creators
export const getUserRequests = user => dispatch => {
    return fetchUserRequestsReq(user)
        .then(requests => dispatch(receiveRequests(requests)))
}