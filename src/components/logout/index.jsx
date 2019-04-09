import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { SignOut } from "../../store/action/auth";

const Logout = props => {
  props.logout();
  if (!props.auth.uid) {
    return <Redirect to="/login" />;
  }
  return <div />; //change to loading
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(SignOut());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
