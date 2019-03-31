import React, { Component } from "react";
import "./style.scss";
import PropTypes from "prop-types";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { sibling, mine } = this.props;
    return (
      // secondMessage
      <div
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
          <p>
            <span>
              <strong>Delivered at</strong> &nbsp;
            </span>
            14 min ago
          </p>
          <p>
            <strong>Message Not Send</strong>
          </p>
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  sibling: PropTypes.bool,
  mine: PropTypes.bool
};

export default Message;
