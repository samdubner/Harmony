import React from "react"
import { Route } from "react-router-dom"

import LoginFormContainer from "./sessionForms/loginFormContainer"
import SignupFormContainer from "./sessionForms/signupFormContainer"

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Test</h1>
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
            </div>
        )
    }
}

export default App;