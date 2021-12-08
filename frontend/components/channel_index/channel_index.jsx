import React from "react";
import { Link } from "react-router-dom";
import ChannelIndexItem from "./channel_index_item_container";

import ColorModalContainer from "../shared/color_modal/color_modal_container";
import UserPfp from "../shared/user_pfp/user_pfp";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
      channelSelected: false,
      modalOpen: false,
    };
    this.toggleInviteDropDown = this.toggleInviteDropDown.bind(this);
    this.handleDeleteServer = this.handleDeleteServer.bind(this);
    this.toggleColors = this.toggleColors.bind(this);
    this.handleLeaveServer = this.handleLeaveServer.bind(this);
  }

  componentDidUpdate() {
    if (
      (Object.values(this.props.channels).length &&
        !this.props.currentChannel) ||
      (this.props.currentChannel &&
        !Object.keys(this.props.channels).includes(
          this.props.currentChannel.toString()
        ))
    ) {
      this.props.setCurrentChannel(Object.values(this.props.channels)[0].id);
      this.setState({ channelSelected: true });
    }
  }

  toggleInviteDropDown(e) {
    if (this.props.server != undefined) {
      if (!this.state.dropdown) {
        this.props.setCurrentInvite(this.props.server.invite);
      }

      this.setState({ dropdown: !this.state.dropdown });
    }
  }

  toggleColors() {
    this.props.openColorModal();
  }

  handleDeleteServer() {
    this.props.deleteServer(this.props.server);
    this.props.history.push("/home");
  }

  handleLeaveServer() {
    this.props.leaveServer({
      server_id: this.props.server.id,
      user_id: this.props.currentUser.id,
    });
    this.props.history.push("/home");
  }

  render() {
    let dropdown;
    if (this.state.dropdown) {
      dropdown = (
        <div className="dropdown">
          <ul>
            <li className="invite-li" onClick={this.props.openInvite}>
              <h2>Invite People</h2>
              <i className="fas fa-user-plus"></i>
            </li>

            {this.props.server.owner_id == this.props.currentUser.id ? (
              <li className="channel-li" onClick={this.props.createChannel}>
                <h2>Add Channel</h2>
                <i className="fas fa-plus"></i>
              </li>
            ) : null}

            <li className="leave-li" onClick={this.handleLeaveServer}>
              <h2>Leave Server</h2>
              <i className="fas fa-door-open"></i>
            </li>
            
            {this.props.server.owner_id == this.props.currentUser.id ? (
              <li className="delete-li" onClick={this.handleDeleteServer}>
                <h2>Delete Server</h2>
                <i className="fas fa-trash"></i>
              </li>
            ) : null}
          </ul>
        </div>
      );
    } else {
      dropdown = null;
    }

    let serverInfo;
    let channels;
    if (this.props.server != undefined) {
      serverInfo = (
        <>
          <div className="server-name">
            <h2>{this.props.server.name}</h2>
            {this.state.dropdown ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </div>
        </>
      );
    } else {
      serverInfo = null;
    }

    if (
      this.props.server != undefined &&
      Object.keys(this.props.channels).length != 0
    ) {
      let isSingleChannel = Object.keys(this.props.channels).length == 1;

      let filtered = Object.values(this.props.channels).filter(
        (channel) => channel.server_id == this.props.server.id
      );

      channels = filtered.map((channel, idx) => {
        let isCurrent = channel.id == this.props.currentChannel;
        return (
          <ChannelIndexItem
            key={idx}
            channel={channel}
            isCurrent={isCurrent}
            isSingleChannel={isSingleChannel}
          />
        );
      });
    } else {
      channels = null;
    }

    let colorModal = this.props.colorModalState ? (
      <ColorModalContainer />
    ) : null;

    return (
      <div className="channel-index">
        <div className="server-info" onClick={this.toggleInviteDropDown}>
          {serverInfo}
          {dropdown}
        </div>
        {colorModal}
        <div className="channels-container">{channels}</div>
        <div className="user-box">
          <div className="user-info">
            <UserPfp user={this.props.currentUser} />
            <h3>{this.props.currentUser.username}</h3>
          </div>
          <div className="user-options">
            <i className="fas fa-cog" onClick={this.toggleColors}></i>
            <i className="fas fa-sign-out-alt" onClick={this.props.logout}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelIndex;
