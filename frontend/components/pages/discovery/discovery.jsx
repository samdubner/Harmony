import React from "react";

import ServerIndexContainer from "../../shared/server_index/server_index_container";
import DiscoveryItem from "./discovery_item";

class Discovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentDidMount() {
    this.props.getAllServers();
  }

  updateFilter(e) {
    console.log(this.props.servers);
    this.setState({ filter: e.target.value });
  }

  render() {
    let servers = Object.values(this.props.servers).filter(
      (server) =>
        server.name.toLowerCase().includes(this.state.filter.toLowerCase()) &&
        !this.props.userServers[server.id]
    );

    return (
      <div className="discovery-container">
        <ServerIndexContainer inDiscovery={true}/>
        <div className="discovery-body">
          <div className="search-box">
            <p>Filter Harmony Servers</p>
            <div>
              <input
                type="text"
                value={this.state.filter}
                onChange={this.updateFilter}
                placeholder="Explore Servers"
              />
            </div>
          </div>
          <div className="servers-list">
            <div className="discovery-text">
              <p>All Harmony Servers</p>
            </div>

            <div className="discovery-index">
              {servers.map((server, idx) => {
                return (
                  <DiscoveryItem
                    key={idx}
                    server={server}
                    joinServer={this.props.joinServer}
                    currentUser={this.props.currentUser}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discovery;
