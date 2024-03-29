import React from "react";

import UserPfp from "../shared/user_pfp/user_pfp";

class RequestItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "outbound",
    };
    this.denyRequest = this.denyRequest.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
  }

  acceptRequest() {
    this.props.createFriend({
      primary_id: this.props.req.sender_id,
      secondary_id: this.props.req.recipient_id,
    });
    this.props.deleteReq(this.props.req.id);
  }

  denyRequest() {
    this.props.deleteReq(this.props.req.id);
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
      user = this.props.users[this.props.req.recipient_id];
      username = user.username;
    } else {
      direction = "Incoming Friend Request";
      user = this.props.users[this.props.req.sender_id];
      username = user.username;
    }

    return (
      <div className="request-item">
        <div className="request-info">
          <UserPfp user={user} />
          <div className="request-text">
            <p className="request-name">{username}</p>
            <p className="request-direction">{direction}</p>
          </div>
        </div>
        <div className="request-options">
          {this.state.direction == "inbound" ? (
            <div
              className="friend-button"
              id="accept-request"
              onClick={this.acceptRequest}
            >
              <i className="fas fa-check"></i>
            </div>
          ) : null}
          <div
            className="friend-button"
            id="deny-request"
            onClick={this.denyRequest}
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestItem;
