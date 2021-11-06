import React from "react";
import { NavLink } from "react-router-dom";

class GroupIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setCurrentGroup(this.props.group);
    this.props.getGroupInfo(this.props.group);
  }

  render() {
    let classes = "group";
    if (this.props.currentGroup) classes = "group selected";

    return (
      <NavLink onClick={this.handleClick} to={`/groups/${this.props.group.id}`}>
        <div className={classes}>
          <div className="group-info">
            <div className="group-icon"></div>
            <p className="group-name">{this.props.group.name}</p>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default GroupIndexItem;
