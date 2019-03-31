import React, { Component } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import { BrowserRouter } from "react-router-dom";
import Routing from "./route";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
