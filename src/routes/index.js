import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Protected from "./protected";

import Login from "../components/login";
import Home from "../components/home";
import logout from "../components/logout";

const Routing = () => {
  return (
    <Switch>
      <Protected path="/chat" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Protected path="/logout" exact component={logout} />
      <Protected path="/" exact component={Home} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routing;
