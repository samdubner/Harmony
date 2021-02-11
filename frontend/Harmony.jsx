import React from "react";
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Root from "./components/root"

import { getUserServerReq,
         createServerReq, 
         serverInfoReq,
         updateServerReq,
         deleteServerReq } from "./util/server_api_util";

document.addEventListener("DOMContentLoaded", (e) => {
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

    window.getUserServerReq = getUserServerReq
    window.createServerReq = createServerReq
    window.serverInfoReq = serverInfoReq;
    window.updateServerReq = updateServerReq;
    window.deleteServerReq = deleteServerReq;
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
})