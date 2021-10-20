import { connect } from "react-redux";
import SplashPage from "./splash";

const mapStateToProps = (state) => {
  return { loggedIn: !!state.session.id };
};

export default connect(mapStateToProps, null)(SplashPage);
