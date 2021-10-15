import { combineReducers } from "redux";

import usersReducer from "./entities/users_reducer";
import serversReducer from "./entities/servers_reducer";
import userServersReducer from "./entities/user_servers";
import channelsReudcer from "./entities/channels_reducer";
import messagesReducer from "./entities/messages_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  userServers: userServersReducer,
  channels: channelsReudcer,
  messages: messagesReducer,
});

export default entitiesReducer;
