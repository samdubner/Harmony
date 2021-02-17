import { SET_MODAL } from "../../actions/ui_actions"

const _closed = {
    modalState: "closed"
}

const uiReducer = (prevState=_closed, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case SET_MODAL:
        return {modalState: action.state}
    default:
        return prevState;
  }
};

export default uiReducer;