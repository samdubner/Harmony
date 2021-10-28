import { connect } from "react-redux";

import {
  setModal,
  setCurrentServer,
  setCurrentChannel,
} from "../../../actions/ui_actions";

import { getUserServers, serverInfo } from "../../../actions/server_actions";
import { getServerChannels } from "../../../actions/channel_actions";
import ServerIndex from "./server_index";

const mapStateToProps = (state) => {
  let servers = [];

  for (let server in state.entities.servers) {
    servers.push(state.entities.servers[server]);
  }

  return {
    modalState: state.ui.server.modalState,
    servers,
    currentUser: state.entities.users[state.session.id],
    currentServer: state.ui.server.currentServer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    promptModal: () => dispatch(setModal("prompt")),
    closeModal: () => dispatch(setModal("closed")),
    fetchServers: (user) => dispatch(getUserServers(user)),
    serverInfo: (server) => dispatch(serverInfo(server)),
    setCurrentServer: (server) => dispatch(setCurrentServer(server)),
    getServerChannels: (server) => dispatch(getServerChannels(server)),
    setCurrentChannel: (channel) => dispatch(setCurrentChannel(channel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
