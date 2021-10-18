import React from "react";

class GroupIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.setCurrentChannel = this.setCurrentChannel.bind(this);
    this.deleteChannel = this.deleteChannel.bind(this);
  }

  setCurrentChannel() {
    if (this.props.currentChannel != this.props.id) {
      this.props.setCurrentChannel(this.props.id);
    }

    let textArea = document.getElementById("message-content");
    textArea.focus();
  }

  deleteChannel(e) {
    this.props.deleteChannel(this.props.id);
    e.stopPropogation;
  }

  render() {
    return (
      <div className="channel" onClick={this.setCurrentChannel}>
        <div className="channel-name">
          <h1 className="text-indicator">#</h1>
          <p>{this.props.name}</p>
        </div>
        <div className="channel-options" onClick={this.deleteChannel}>
          <i className="channel-delete fas fa-trash-alt"></i>
        </div>
      </div>
    );
  }
}

export default GroupIndexItem;
