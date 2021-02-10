import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LoginFormContainer from "./sessionForms/loginFormContainer"
import SignupFormContainer from "./sessionForms/signupFormContainer"

//temporary
import LoggedInContainer from "./logged_in_container";

class App extends React.Component {

    render() {
        return(
            <Switch>
                <ProtectedRoute exact path="/" component={LoggedInContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
            </Switch>
        )
    }
}

export default App;