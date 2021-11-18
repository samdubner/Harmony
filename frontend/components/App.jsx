import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import MissingRoute from "./missing_route"


//login and signup
import LoginFormContainer from "./session_forms/loginFormContainer"
import SignupFormContainer from "./session_forms/signupFormContainer"

//main pages
import SplashPage from "./pages/splash/splash_container"
import HomeContainer from "./pages/home/home_container";
import GroupContainer from "./pages/group/group_container"
import ServerContainer from "./pages/server/server_container"

class App extends React.Component {

    render() {
        return(
            <Switch>
                <Route exact path="/" component={SplashPage}/>
                <ProtectedRoute exact path="/home" component={HomeContainer} />
                <ProtectedRoute exact path="/servers/:serverId" component={ServerContainer} />
                <ProtectedRoute exact path="/groups/:groupId" component={GroupContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <Route path="/" component={MissingRoute} />
            </Switch>
        )
    }
}

export default App;