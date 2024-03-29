import React from "react";
import { NavLink, Redirect } from "react-router-dom";

class GroupIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this)
  }

  handleClick() {
    this.props.setCurrentGroup(this.props.group);
    this.props.getGroupInfo(this.props.group);
  }

  deleteGroup(e) {
    e.stopPropagation();
    e.preventDefault();

    this.props.deleteGroup(this.props.group.id);
    if (this.props.currentGroup) this.props.history.push("/home");
  }

  leaveGroup(e) {
    e.stopPropagation();
    e.preventDefault();

    this.props.leaveGroup({
      group_id: this.props.group.id,
      user_id: this.props.currentUser
    })
    this.props.history.push("/home")
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

          {this.props.currentUser == this.props.group.owner_id ? (
            <div className="group-options" onClick={this.deleteGroup}>
              <i className="fas fa-trash-alt"></i>
            </div>
          ) : (
            <div className="group-options" onClick={this.leaveGroup}>
              <i className="fas fa-door-open"></i>
            </div>
          )}
        </div>
      </NavLink>
    );
  }
}

export default GroupIndexItem;
