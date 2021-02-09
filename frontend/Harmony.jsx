import React from "react";
import ReactDOM from "react-dom"
import { login, logout, signup } from "./actions/session_actions";
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", (e) => {
    const store = configureStore();
    window.store = store;
    const root = document.getElementById("root")
    ReactDOM.render(<h1>test</h1>, root)
    window.login = login;
    window.logout = logout;
    window.signup = signup;
})