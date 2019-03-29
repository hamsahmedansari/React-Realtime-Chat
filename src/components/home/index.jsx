import React, { Component } from "react";
// import Login from "../login";
import "./style.scss";
import Header from "../common/header";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        {/* <Login /> */}
        <Header />
      </div>
    );
  }
}

export default Home;
