import { connect } from "react-redux";

import { setCurrentChannel } from "../../actions/ui_actions";
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
    deleteChannel: (channel) => dispatch(deleteChannel(channel))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem);
