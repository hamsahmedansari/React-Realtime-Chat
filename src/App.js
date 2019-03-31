import React, { Component } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import Home from "./components/home";
import Login from "./components/login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
