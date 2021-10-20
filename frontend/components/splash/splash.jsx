import React from "react";

import { NavLink } from "react-router-dom";

class SplashPage extends React.Component {
  render() {
    let route;
    let text;
    if (this.props.loggedIn) {
      text = "Open Harmony";
      route = "/home";
    } else {
      text = "Log In";
      route = "/login";
    }

    return <div>
      <NavLink to={route}>
        <p>{text}</p>
      </NavLink>
    </div>;
  }
}

export default SplashPage;
