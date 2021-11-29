import React from "react";

import ServerIndexContainer from "../../shared/server_index/server_index_container";

class Discovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
    this.updateFilter = this.updateFilter.bind(this)
  }

  updateFilter(e) {
    this.setState({filter: e.target.value})
  }

  render() {
    return (
      <div className="discovery-container">
        <ServerIndexContainer servers={this.props.servers} inServer={false} />
        <div className="discovery-index">
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
          <div className="servers-list"></div>
        </div>
      </div>
    );
  }
}

export default Discovery;
