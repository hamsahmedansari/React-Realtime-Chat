import React, { Component } from "react";
import Login from "../login";
import "./style.scss";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Login />
      </div>
    );
  }
}

export default Home;
