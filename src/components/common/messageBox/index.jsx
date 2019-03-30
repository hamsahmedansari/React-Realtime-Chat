import React, { Component } from "react";
import "./style.scss";

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { active } = this.props;
    return (
      <div className={`messageBox flex-container ${active ? "active" : ""}`}>
        <div className="item">
          <img src="/assets/images/3.jpeg" alt="" />
        </div>
        <div className="item">
          <h4>Arqam Ahmed</h4>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </div>
        <div className="item">
          <p>Dec 12</p>
          <p>
            <i className="fas fa-dot-circle" />
          </p>
        </div>
      </div>
    );
  }
}

export default MessageBox;
