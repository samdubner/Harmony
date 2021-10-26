import { connect } from "react-redux";

import { getUserGroups, createGroup } from "../../actions/group_actions"
import { setCurrentGroup } from "../../actions/ui_actions";

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
    setCurrentGroup: (group) => dispatch(setCurrentGroup(group))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);
