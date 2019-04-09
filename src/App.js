import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routing from "./routes";
import store from "./store";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import "animate.css/animate.css";

import "./App.css";

import Common from "./components/common";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <div id="routing">
              <Routing />
            </div>
            {/* Common Component i.e modal dialog etc */}
            <Common />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
