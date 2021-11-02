import React from "react";

class RequestItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "outbound",
    };
  }

  componentDidMount() {
    if (this.props.req.sender_id == this.props.currentUser) {
      this.setState({ direction: "outbound" });
    } else {
      this.setState({ direction: "inbound" });
    }
  }

  render() {

    let direction;
    let username;
    let user;
    if (this.state.direction == "outbound") {
      direction = "Outgoing Friend Request";
      user = this.props.users[this.props.req.recipient_id]
      username = user.username
    } else {
      direction = "Incoming Friend Request";
      user = this.props.users[this.props.req.sender_id]
      username = user.username
    }

    return (
      <div className="request-item">
        <div className="request-info">
          <div className="friend-pfp" />
          <div className="request-text">
            <p className="request-name">{username}</p>
            <p className="request-direction">{direction}</p>
          </div>
        </div>
        <div className="request-options">
          {this.state.direction == "inbound" ? (
            <div className="friend-button" id="accept-request">
              <i className="fas fa-check"></i>
            </div>
          ) : null}
          <div className="friend-button" id="deny-request">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestItem;
