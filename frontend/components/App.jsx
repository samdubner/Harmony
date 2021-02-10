import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LoginFormContainer from "./sessionForms/loginFormContainer"
import SignupFormContainer from "./sessionForms/signupFormContainer"

//temporary
import LoggedIn from "./loggedIn"

class App extends React.Component {

    render() {
        return(
            <div>
                <ProtectedRoute path="/" component={LoggedIn} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </div>
        )
    }
}

export default App;