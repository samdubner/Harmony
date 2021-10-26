import React from "react";
import { NavLink } from "react-router-dom";

class GroupIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <NavLink to={`/groups/${this.props.group.id}`}>
            <div className="group">
              <div className="group-info">
                <div className="group-icon"></div>
                <p className="group-name">{this.props.group.name}</p>
              </div>
            </div>
          </NavLink>
        );
    }
}

export default GroupIndexItem