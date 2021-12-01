import { connect } from "react-redux"
import { withRouter } from "react-router"

import { setModal, setColorModal, setCurrentInvite, setCurrentChannel } from "../../actions/ui_actions"
import { leaveServer } from "../../actions/user_server_actions"
import { deleteServer } from "../../actions/server_actions"

import { getServerChannels } from "../../actions/channel_actions"

import ChannelIndex from "./channel_index"

const mapStateToProps = state => {
    return {
        channels: state.entities.channels,
        currentServer: state.ui.server.currentServer,
        currentChanne: state.ui.server.currentChannel,
        colorModalState: state.ui.server.showColorModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openInvite: () => dispatch(setModal("invite")),
        openColorModal: () => dispatch(setColorModal(true)),
        createChannel: () => dispatch(setModal("createChannel")),
        setCurrentChannel: (channel) => dispatch(setCurrentChannel(channel)),
        setCurrentInvite: (invite) => dispatch(setCurrentInvite(invite)),
        deleteServer: (server) => dispatch(deleteServer(server)),
        getServerChannels: (server) => dispatch(getServerChannels(server)),
        leaveServer: (serverId) => dispatch(leaveServer(serverId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndex))