import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";

class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route path="/chat" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Login} />
        <Redirect to="/404" />
      </Switch>
    );
  }
}

export default Routing;
