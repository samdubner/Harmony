import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import MissingRoute from "./missing_route"

//login and signup
import LoginFormContainer from "./session_forms/loginFormContainer"
import SignupFormContainer from "./session_forms/signupFormContainer"

//home page
import HomeContainer from "./home/home_container";

//server page
import ServerContainer from "./server/server_container"

class App extends React.Component {

    render() {
        return(
            <Switch>
                <ProtectedRoute exact path="/" component={HomeContainer} />
                <ProtectedRoute exact path="/servers/:serverId" component={ServerContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <Route path="/" component={MissingRoute} />
            </Switch>
        )
    }
}

export default App;