import { combineReducers } from "redux"
import server_ui_reducer from "./ui/server_ui_reducer"

const uiReducer = combineReducers({
    server: server_ui_reducer
})

export default uiReducer