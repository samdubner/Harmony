import { connect } from "react-redux"

import { setModal, setCurrentInvite, setCurrentServer } from "../../../actions/ui_actions"
import { deleteServer } from "../../../actions/server_actions"

import { getServerChannels } from "../../../actions/channel_actions"

import GroupIndex from "./group_index"

const mapStateToProps = state => {
    return {
        display: "channels",
        channels: state.entities.channels
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openInvite: () => dispatch(setModal("invite")),
        createChannel: () => dispatch(setModal("createChannel")),
        setCurrentInvite: (invite) => dispatch(setCurrentInvite(invite)),
        setCurrentServer: (server) => dispatch(setCurrentServer(server)),
        deleteServer: (server) => dispatch(deleteServer(server)),
        getServerChannels: (server) => dispatch(getServerChannels(server))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex)