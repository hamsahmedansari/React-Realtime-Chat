import React, { Component } from "react";
import "./style.scss";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.refs.message.scrollIntoView();
  }
  render() {
    const { sibling, mine } = this.props;
    return (
      // secondMessage
      <div
        ref="message"
        className={`message flex-container ${sibling ? "secondMessage" : ""} ${
          mine ? "mine" : ""
        }`}
      >
        {!mine && <img src="/assets/images/2.jpeg" alt="" className="item" />}
        <div className="item message-body">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
            mollitia, accusamus debitis necessitatibus sint labore corporis
            numquam assumenda sapiente. Soluta, doloribus repellendus. Optio
            ratione officiis magnam corrupti adipisci facilis eius!
          </p>
          <p>14 min ago</p>
        </div>
      </div>
    );
  }
}

export default Message;
