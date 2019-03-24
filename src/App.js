import React, { Component } from "react";
import "./App.css";
import "font-awesome/scss/font-awesome.scss";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
