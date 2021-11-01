import { connect } from "react-redux";

import { getUserRequests } from "../../actions/friend_request_actions";

import FriendIndex from "./friend_index";

const mapStateToProps = (state) => {
  return {
      currentUser: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserRequests: (user) => dispatch(getUserRequests(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndex);
