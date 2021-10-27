import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logout } from "../../actions/session_actions";
import { getGroupMessages } from "../../actions/private_message_actions"

import Group from "./group";

const mapStateToProps = (state) => {
  let servers = [];

  for (let server in state.entities.servers) {
    servers.push(state.entities.servers[server]);
  }

  return {
    currentUser: state.entities.users[state.session.id],
    servers,
    users: state.entities.users,
    currentGroup: state.ui.server.currentGroup
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    getChannelMessages: (group) => dispatch(getGroupMessages(group))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Group));
