import React from "react";
import { NavLink } from "react-router-dom";

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setCurrentServer(this.props.server.id);
  }

  render() {
    let initializedServerName = this.props.server.name.split(" ");
    if (initializedServerName.length > 1) {
      initializedServerName =
        initializedServerName[0].charAt(0) + initializedServerName[1].charAt(0);
    } else {
      initializedServerName = initializedServerName[0].charAt(0);
    }

    initializedServerName = initializedServerName.toUpperCase();

    let serverItem;
    if (this.props.currentServer == this.props.server.id) {
      serverItem = (
        <div className="server-index-item selected-server">
          <h2>{initializedServerName}</h2>
        </div>
      );
    } else {
      serverItem = (
        <NavLink
          onClick={this.handleClick}
          to={`/servers/${this.props.server.id}`}
        >
          <div className="server-index-item">
            <h2>{initializedServerName}</h2>
          </div>
        </NavLink>
      );
    }
    return (
      <>
        { serverItem }
      </>
    );
  }
}

export default ServerIndexItem;
