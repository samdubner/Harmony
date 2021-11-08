import { connect } from "react-redux";

import { logout } from "../../../actions/session_actions";
import { getGroupInfo } from "../../../actions/group_actions";
import { deletePrivateMessage, getGroupMessages, receivePrivateMessage } from "../../../actions/private_message_actions"
import { setCurrentGroup } from "../../../actions/ui_actions";

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
    currentGroup: state.ui.server.currentGroup,
    groups: state.entities.groups,
    messages: state.entities.privateMessages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    getChannelMessages: (group) => dispatch(getGroupMessages(group)),
    receiveMessage: (message) => dispatch(receivePrivateMessage(message)),
    deleteMessage: (message) => dispatch(deletePrivateMessage(message)),
    getGroupInfo: (group) => dispatch(getGroupInfo(group)),
    setCurrentGroup: (group) => dispatch(setCurrentGroup(group))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
