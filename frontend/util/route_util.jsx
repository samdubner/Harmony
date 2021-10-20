import React from "react";
import { connect } from "react-redux"
import { Route, withRouter, Redirect } from "react-router-dom"

const AuthComponent = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
        <Component {...props} />
        ) : (
        <Redirect to="/home" />
        )
    )}/>
  )
}

const ProtectedComponent = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
        <Component {...props} />
        ) : (
        <Redirect to="/" />
        )
    )}/>
  )
}

const mapStateToProps = state => {
  return { loggedIn: !!state.session.id };
}

export const AuthRoute = withRouter(connect(mapStateToProps)(AuthComponent));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(ProtectedComponent));