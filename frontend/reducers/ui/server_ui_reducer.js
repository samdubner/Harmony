import { TOGGLE_MODAL } from "../../actions/ui_actions"

const _closed = {
    modalOpen: false
}

const uiReducer = (prevState=_closed, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case TOGGLE_MODAL:
        return {modalOpen: !prevState.modalOpen}
    default:
        return prevState;
  }
};

export default uiReducer;