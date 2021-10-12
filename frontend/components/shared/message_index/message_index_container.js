import {connect} from "react-redux"

import MessageIndex from "./message_index"

const mapStateToProps = state => {
    return {
        currentChannel: state.ui.server.currentChannel
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)