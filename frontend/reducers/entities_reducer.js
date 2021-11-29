import { combineReducers } from "redux";

import usersReducer from "./entities/users_reducer";
import serversReducer from "./entities/servers_reducer";
import groupsReducer from "./entities/groups_reducer"
import userServersReducer from "./entities/user_servers_reducer";
import channelsReudcer from "./entities/channels_reducer";
import messagesReducer from "./entities/messages_reducer";
import privateMessagesReducer from "./entities/private_messages_reducer";
import friendshipsReducer from "./entities/friendships_reducer";
import friendRequestsReducer from "./entities/friend_requests_reducer";
import allServersReducer from "./entities/all_servers_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  allServers: allServersReducer,
  userServers: userServersReducer,
  groups: groupsReducer,
  channels: channelsReudcer,
  messages: messagesReducer,
  privateMessages: privateMessagesReducer,
  friendships: friendshipsReducer,
  friendRequests: friendRequestsReducer
});

export default entitiesReducer;
