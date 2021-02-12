import React from "react";
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Root from "./components/root"

import {
        getUserServers,
        createServer,
        serverInfo,
        updateServer,
        deleteServer
    } from "./actions/server_actions";
import { createServerReq } from "./util/server_api_util";

document.addEventListener("DOMContentLoaded", (e) => {
    // window.getUserServers = getUserServers
    // window.createServer = createServer
    // window.serverInfo = serverInfo
    // window.updateServer = updateServer
    // window.deleteServer = deleteServer
    // window.createServerReq = createServerReq

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // window.store = store
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
})