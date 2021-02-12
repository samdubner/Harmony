import { combineReducers } from "redux";

import usersReducer from "./entities/users_reducer";
import serversReducer from "./entities/servers_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer
});

export default entitiesReducer;
