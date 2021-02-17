import { connect } from "react-redux";

import ServerModal from "./server_modal";
import { toggleModal } from "../../../actions/ui_actions";
import { createServer } from "../../../actions/server_actions"

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch(toggleModal()),
        createServer: server => dispatch(createServer(server))
    }
}

export default connect(null, mapDispatchToProps)(ServerModal)