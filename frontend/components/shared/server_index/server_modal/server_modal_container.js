import { connect } from "react-redux";

import ServerModal from "./server_modal";
import { setModal } from "../../../../actions/ui_actions";
import { createServer } from "../../../../actions/server_actions"

const mapDispatchToProps = dispatch => {
    return {
        setModal: () => dispatch(setModal()),
        createServer: server => dispatch(createServer(server)),
        joinServer: server => dispatch(joinServer(server))
    }
}

export default connect(null, mapDispatchToProps)(ServerModal)