import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ component: Component, ...rest }) => {
  if (true) {
    return <Route {...rest} component={Component} />;
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

export default Protected;
