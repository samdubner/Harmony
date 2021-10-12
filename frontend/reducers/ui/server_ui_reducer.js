import { SET_MODAL, SET_CURRENT_INVITE, SET_CURRENT_SERVER, SET_CURRENT_CHANNEL } from "../../actions/ui_actions"

const _closed = {
    modalState: "closed"
}

const uiReducer = (prevState=_closed, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case SET_MODAL:
        return Object.assign({}, prevState, {modalState: action.state})
    case SET_CURRENT_INVITE:
        return Object.assign({}, prevState, {serverInvite: action.invite})
    case SET_CURRENT_SERVER:
        return Object.assign({}, prevState, {currentServer: action.server.id})
    case SET_CURRENT_CHANNEL:
        return Object.assign({}, prevState, {currentChannel: action.channel})
    default:
        return prevState;
  }
};

export default uiReducer;