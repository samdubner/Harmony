import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

import { setCurrentChannel, setCurrentServer } from "../../actions/ui_actions";
import { deleteChannel } from "../../actions/channel_actions";

import ChannelIndexItem from "./channel_index_item";

const mapStateToProps = (state) => {
  return {
    currentChannel: state.ui.server.currentChannel
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentChannel: (channel) => dispatch(setCurrentChannel(channel)),
    setCurrentServer: (server) => dispatch(setCurrentServer(server)),
    deleteChannel: (channel) => dispatch(deleteChannel(channel)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem));
