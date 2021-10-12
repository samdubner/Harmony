import { connect } from "react-redux";

// import { logout } from "../../actions/session_actions";
import { setCurrentChannel } from "../../../actions/ui_actions";

import GroupIndexItem from "./group_index_item";

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentChannel: (channel) => dispatch(setCurrentChannel(channel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndexItem);
