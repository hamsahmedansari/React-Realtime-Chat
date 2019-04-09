import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Protected = ({ component: Component, ...props }) => {
  if (props.auth.uid) {
    return <Route {...props} component={Component} />;
    // return false;
  } else {
    return (
      <Redirect
        to={{
          pathname: "/login"
          // search: "?utm=your+face",
          // state: { referrer: currentLocation }
        }}
      />
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(Protected);
