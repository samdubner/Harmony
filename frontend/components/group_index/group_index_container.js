import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

import { getUserGroups, createGroup, getGroupInfo, deleteGroup } from "../../actions/group_actions"
import { setCurrentGroup } from "../../actions/ui_actions";
import { leaveGroup } from "../../actions/user_group_actions";

import GroupIndex from "./group_index";

const mapStateToProps = (state) => {
  let groups = [];

  for(let group in state.entities.groups) {
    groups.push(state.entities.groups[group])
  }

  return {
    groups,
    currentUser: state.session.id,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGroup: (group) => dispatch(createGroup(group)),
    getUserGroups: (user) => dispatch(getUserGroups(user)),
    setCurrentGroup: (group) => dispatch(setCurrentGroup(group)),
    getGroupInfo: (group) => dispatch(getGroupInfo(group)),
    deleteGroup: (group) => dispatch(deleteGroup(group)),
    leaveGroup: (leaveInfo) => dispatch(leaveGroup(leaveInfo))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupIndex));
