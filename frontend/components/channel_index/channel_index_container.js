import { connect } from "react-redux"

import { setModal, setCurrentInvite, setCurrentChannel } from "../../actions/ui_actions"
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
        createChannel: () => dispatch(setModal("createChannel")),
        setCurrentChannel: (channel) => dispatch(setCurrentChannel(channel)),
        setCurrentInvite: (invite) => dispatch(setCurrentInvite(invite)),
        deleteServer: (server) => dispatch(deleteServer(server)),
        getServerChannels: (server) => dispatch(getServerChannels(server))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)