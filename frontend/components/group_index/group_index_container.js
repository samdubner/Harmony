import { connect } from "react-redux";

import { getServerChannels } from "../../actions/channel_actions";

import GroupIndex from "./group_index";

const mapStateToProps = (state) => {
  return {
    // channels: state.entities.channels,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // createChannel: () => dispatch(setModal("createChannel")),
    // getServerChannels: (server) => dispatch(getServerChannels(server)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);
