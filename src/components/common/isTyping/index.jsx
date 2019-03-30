import React, { Component } from "react";
import "./style.scss";
class IsTyping extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`typing flex-container`}>
        <img src="/assets/images/2.jpeg" alt="" className="item" />
        <div className="item message-body">
          <p>
            <i
              className="fas fa-dot-circle"
              style={{ animationDelay: "0.3s" }}
            />
            <i
              className="fas fa-dot-circle"
              style={{ animationDelay: "0.5s" }}
            />
            <i
              className="fas fa-dot-circle"
              style={{ animationDelay: "0.1s" }}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default IsTyping;
