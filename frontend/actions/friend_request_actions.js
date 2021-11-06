import {
  fetchUserRequestsReq,
  createRequestReq,
  deleteRequestReq,
} from "../util/friend_request_api_util";

//Action Types
export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const DELETE_REQUEST = "DELETE_REQUEST";

//Action Creators
const receiveRequests = (requests) => {
  return {
    type: RECEIVE_REQUESTS,
    requests,
  };
};

const receiveRequest = (request) => {
  return {
    type: RECEIVE_REQUEST,
    request,
  };
};

const removeRequest = (request) => {
  return {
    type: DELETE_REQUEST,
    request
  };
};

//Thunk Action Creators
export const getUserRequests = (user) => (dispatch) => {
  return fetchUserRequestsReq(user).then((requests) =>
    dispatch(receiveRequests(requests))
  );
};

export const createFriendRequest = (requestData) => (dispatch) => {
  return createRequestReq(requestData).then((request) =>
    dispatch(receiveRequest(request))
  );
};

export const deleteFriendRequest = (requestId) => dispatch => {
  return deleteRequestReq(requestId)
    .then(request => dispatch(removeRequest(request)))
}