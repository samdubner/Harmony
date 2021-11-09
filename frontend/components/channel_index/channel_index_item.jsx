import React from "react";

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.setCurrentChannel = this.setCurrentChannel.bind(this);
    this.deleteChannel = this.deleteChannel.bind(this);
  }

  setCurrentChannel() {
    if (this.props.currentChannel != this.props.channel.id) {
      this.props.setCurrentChannel(this.props.channel.id);
    }

    let textArea = document.getElementById("message-content");
    textArea.focus();
  }

  deleteChannel(e) {
    this.props.deleteChannel(this.props.channel.id);
    e.stopPropagation();
    e.preventDefault();
    if (this.props.currentChannel == this.props.channel.id) {
      this.props.history.push("/home");
      this.props.setCurrentServer(null);
    }
  }

  render() {
    let classes = this.props.isCurrent ? "channel selected-channel" : "channel";

    return (
      <div className={classes} onClick={this.setCurrentChannel}>
        <div className="channel-name">
          <h1 className="text-indicator">#</h1>
          <p>{this.props.channel.name}</p>
        </div>
        {this.props.currentServer.owner_id == this.props.currentUser ? (
          <div className="channel-options" onClick={this.deleteChannel}>
            <i className="channel-delete fas fa-trash-alt"></i>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ChannelIndexItem;
