import React, { Component } from "react";
import "./style.scss";
import PropTypes from "prop-types";

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { active, status, name, image, message, date, online } = this.props;
    return (
      <div className={`messageBox flex-container ${active ? "active" : ""}`}>
        <div className="item">
          <img src={image} alt="" />
        </div>
        <div className="item">
          <h4>{name}</h4>
          {!status && (
            <p>
              {String(message).length >= 40
                ? message
                : String(message)
                    .slice(0, 40)
                    .concat("...")}
            </p>
          )}
        </div>
        <div className="item">
          <p>{date}</p>
          <p className={online ? "online" : ""}>
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
