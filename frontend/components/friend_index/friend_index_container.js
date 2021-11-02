import { connect } from "react-redux";

import FriendIndex from "./friend_index";

const mapStateToProps = (state) => {
  return {
      currentUser: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndex);
