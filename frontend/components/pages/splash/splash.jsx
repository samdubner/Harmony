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

    return (
      <div className="splash-container">
        <div className="splash-header">
          <a href="https://github.com/samdubner" target="_blank">
            Github
          </a>
          <a href=" www.linkedin.com/in/samuel-dubner" target="_blank">
            Linkedin
          </a>
          <a href="https://angel.co/u/samuel-dubner" target="_blank">
            AngelList
          </a>
        </div>
        <div className="splash-body">
          <h1 className="harmony-title">Harmony</h1>
          <p className="harmony-desc">
            ...where you can easily talk to all your friends about anything
            going on. Stay connected to everyone that matters any time of day.
            Harmony keeps all your friends together in one place so you can
            focus on just chatting and having fun!
          </p>
          <NavLink to={route}>
            <div className="harmony-button">{text}</div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SplashPage;
