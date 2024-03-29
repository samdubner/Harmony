import React from "react";
import ServerIndexItem from "./server_index_item";
import { NavLink } from "react-router-dom";

import PromptServerModal from "./server_modal/prompt_server_modal_container";
import CreateServerModal from "./server_modal/create_server_modal_container";
import JoinServerModal from "./server_modal/join_server-modal_container";
import InviteServerModal from "./server_modal/invite_server_modal_container";
import CreateChannelModal from "./server_modal/create_channel_modal_container";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.setServerNull = this.setServerNull.bind(this);
  }

  setServerNull() {
    this.props.setCurrentServer(null);
  }

  componentDidMount() {
    this.props.fetchServers(this.props.currentUser);
    this.props.getUserRequests(this.props.currentUser.id);
    this.props.getUserFriends(this.props.currentUser.id);
    this.interval = setInterval(() => {
      this.props.fetchServers(this.props.currentUser);
      this.props.getUserRequests(this.props.currentUser.id);
      this.props.getUserFriends(this.props.currentUser.id);
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let modal;

    switch (this.props.modalState) {
      case "closed":
        modal = null;
        break;
      case "prompt":
        modal = <PromptServerModal closeModal={this.props.closeModal} />;
        break;
      case "join":
        modal = <JoinServerModal closeModal={this.props.closeModal} />;
        break;
      case "create":
        modal = <CreateServerModal closeModal={this.props.closeModal} />;
        break;
      case "invite":
        modal = (
          <InviteServerModal
            closeModal={this.props.closeModal}
            invite={this.props.invite}
          />
        );
        break;
      case "createChannel":
        modal = <CreateChannelModal closeModal={this.props.closeModal} />;
        break;
      default:
        modal = null;
    }

    let homeItemClasses = "server-index-item";
    let discoveryItemClasses = "extra-server-index-item"
    if (!this.props.inServer && !this.props.inDiscovery) {
      homeItemClasses = "server-index-item selected-server";
    } else if (this.props.inDiscovery) {
      discoveryItemClasses = "extra-server-index-item selected-server"
    }

    return (
      <div className="server-index">
        <NavLink to="/home" onClick={this.setServerNull}>
          <div className={homeItemClasses}>
            <h2>H</h2>
          </div>
        </NavLink>

        <div className="index-separator"></div>

        {this.props.servers.map((server, idx) => {
          return (
            <ServerIndexItem
              key={idx}
              server={server}
              serverInfo={this.props.serverInfo}
              setCurrentServer={this.props.setCurrentServer}
              getServerChannels={this.props.getServerChannels}
              currentServer={this.props.currentServer}
              setCurrentChannel={this.props.setCurrentChannel}
            />
          );
        })}

        <div
          className="extra-server-index-item"
          onClick={this.props.promptModal}
        >
          <p>+</p>
        </div>

        <NavLink to="/discovery" onClick={this.setServerNull}>
          <div className={discoveryItemClasses}>
            <i className="fas fa-search"></i>
          </div>
        </NavLink>

        {modal}
      </div>
    );
  }
}

export default ServerIndex;
