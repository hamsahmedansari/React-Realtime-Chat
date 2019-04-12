import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./style.scss";
import { ChangeSelectedUser } from "../../../store/action/chat";
import GetDate from "../../../common/getDate";

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handelChangeChat = () => {
    const { user, changeSelectedUser } = this.props;
    changeSelectedUser(user.uid);
  };
  render() {
    const { user, status, selectedUser } = this.props;
    const { fullname, image, lastLogin, isLogin, uid } = user;
    const active = selectedUser.uid === uid ? true : false;
    const message = "i am dummy message";
    return (
      <div
        className={`messageBox flex-container ${active ? "active" : ""}`}
        onClick={this.handelChangeChat}
      >
        <div className="item">
          <img src={image} alt="" />
        </div>
        <div className="item">
          <h4>{fullname}</h4>
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
          <p>{isLogin ? null : GetDate(lastLogin)}</p>
          <p className={isLogin ? "online" : ""}>
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeSelectedUser: uid => {
      dispatch(ChangeSelectedUser(uid));
    }
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    selectedUser: state.chat
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBox);
