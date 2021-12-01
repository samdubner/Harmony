import React from "react";

class DiscoveryItem extends React.Component {
  constructor(props) {
    super(props);
    this.joinServer = this.joinServer.bind(this);
  }

  joinServer() {
    this.props.joinServer({
      user_id: this.props.currentUser,
      invite: this.props.server.invite,
    });
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

    return (
      <div className="discovery-item">
        <div className="server-content">
          <div className="server-icon">{initializedServerName}</div>
          <p className="server-name">{this.props.server.name}</p>
        </div>
        <div className="server-actions">
          <div onClick={this.joinServer}>Join Server</div>
        </div>
      </div>
    );
  }
}

export default DiscoveryItem;
