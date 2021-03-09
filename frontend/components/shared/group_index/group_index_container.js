import { connect } from "react-redux"

import { setModal, setCurrentInvite } from "../../../actions/ui_actions"
import { deleteServer } from "../../../actions/server_actions"

import GroupIndex from "./group_index"

const mapDispatchToProps = dispatch => {
    return {
        openInvite: () => dispatch(setModal("invite")),
        setCurrentInvite: (invite) => dispatch(setCurrentInvite(invite)),
        deleteServer: (server) => dispatch(deleteServer(server))
    }
}

export default connect(null, mapDispatchToProps)(GroupIndex)