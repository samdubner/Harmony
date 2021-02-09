import React from "react";
import ReactDOM from "react-dom"
import { signupReq, loginReq, logoutReq } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", (e) => {
    const root = document.getElementById("root")
    ReactDOM.render(<h1>test</h1>, root)
    window.signupReq = signupReq;
    window.loginReq = loginReq;
    window.logoutReq = logoutReq;
})