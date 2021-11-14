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
          <a href="https://www.google.com" target="_blank">
            Github
          </a>
          <a href="https://www.google.com" target="_blank">
            Linkedin
          </a>
          <a href="https://www.google.com" target="_blank">
            AngelList
          </a>
        </div>
        <div className="splash-body">
          <h1 className="harmony-title">Harmony</h1>
          <p className="harmony-desc">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
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
