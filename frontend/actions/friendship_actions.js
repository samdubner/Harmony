import {
  getUserFriendsReq,
  createFriendshipReq,
  deleteFriendshipReq
} from "../util/friendship_api_util";

//Action Types
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND"

//Action Creators
const receiveFriends = (friends) => {
  return {
    type: RECEIVE_FRIENDS,
    friends,
  };
};

const receiveFriend = (friend) => {
  return {
    type: RECEIVE_FRIEND,
    friend,
  };
};

const removeFriend = (friend) => {
  return {
    type: REMOVE_FRIEND,
    friend
  }
}

//Thunk Action Creators
export const getUserFriends = (user) => (dispatch) => {
  return getUserFriendsReq(user).then((friends) =>
    dispatch(receiveFriends(friends))
  );
};

export const createFriendship = (friendData) => (dispatch) => {
  return createFriendshipReq(friendData)
    .then(friend => dispatch(receiveFriend(friend)))
};

export const deleteFriendship = (friend) => (dispatch) => {
  return deleteFriendshipReq(friend)
    .then(friend => dispatch(removeFriend(friend)))
}
