import { connect } from "react-redux";

import ServerModal from "./server_modal";
import { toggleModal } from "../../../actions/ui_actions";

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch(toggleModal())
    }
}

export default connect(null, mapDispatchToProps)(ServerModal)