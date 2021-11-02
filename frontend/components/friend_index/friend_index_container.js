import { connect } from "react-redux";

import { deleteFriendRequest } from "../../actions/friend_request_actions";
import { createFriendship } from "../../actions/friendship_actions";

import FriendIndex from "./friend_index";

const mapStateToProps = (state) => {
  return {
      currentUser: state.session.id,
      friendRequests: state.entities.friendRequests,
      friends: state.entities.friendships,
      users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFriendRequest: (request) => dispatch(deleteFriendRequest(request)),
    createFriendship: (data) => dispatch(createFriendship(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndex);
