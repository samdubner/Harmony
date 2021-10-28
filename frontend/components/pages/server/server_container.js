import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { logout } from "../../../actions/session_actions"
import { getChannelMessages, receiveMessage } from "../../../actions/message_actions"

import Server from "./server"

const mapStateToProps = (state) => {
  let servers = [];

  for (let server in state.entities.servers) {
    servers.push(state.entities.servers[server]);
  }

  return {
    currentUser: state.entities.users[state.session.id],
    currentServer: state.ui.server.currentServer,
    currentChannel: state.ui.server.currentChannel,
    servers,
    channels: state.entities.channels,
    users: state.entities.users,
    messages: state.entities.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    getChannelMessages: (channel) => dispatch(getChannelMessages(channel)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Server))