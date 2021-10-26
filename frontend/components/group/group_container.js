import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logout } from "../../actions/session_actions";

import Group from "./group";

const mapStateToProps = (state) => {
  let servers = [];

  for (let server in state.entities.servers) {
    servers.push(state.entities.servers[server]);
  }

  return {
    currentUser: state.entities.users[state.session.id],
    currentServer: state.ui.server.currentServer,
    servers,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Group));
