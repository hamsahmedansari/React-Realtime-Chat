import React, { Component } from "react";
import "./style.scss";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="message flex-container">
        <img src="/assets/images/2.jpeg" alt="" className="item" />
        <div className="item">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
            mollitia, accusamus debitis necessitatibus sint labore corporis
            numquam assumenda sapiente. Soluta, doloribus repellendus. Optio
            ratione officiis magnam corrupti adipisci facilis eius!
          </p>
        </div>
      </div>
    );
  }
}

export default Message;
