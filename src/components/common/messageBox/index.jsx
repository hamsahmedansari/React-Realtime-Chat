import React, { Component } from "react";
import "./style.scss";
import PropTypes from "prop-types";

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { active, status } = this.props;
    return (
      <div className={`messageBox flex-container ${active ? "active" : ""}`}>
        <div className="item">
          <img src="/assets/images/3.jpeg" alt="" />
        </div>
        <div className="item">
          <h4>Arqam Ahmed</h4>
          {!status && <p>Lorem ipsum dolor sit amet consectetur...</p>}
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

MessageBox.propTypes = {
  active: PropTypes.bool
};

export default MessageBox;
