import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./style.scss";
import { ChangeSelectedUser } from "../../../store/action/chat";
import GetDate from "../../../common/getDate";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastMessage: ""
    };
    this._firestoreGetLastMessage = null;
  }
  handelChangeChat = () => {
    const { user, changeSelectedUser } = this.props;
    changeSelectedUser(user.uid, null);
  };
  componentDidMount() {
    const { status, firestore, roomId } = this.props;
    if (!status) {
      // console.log(roomId);

      if (roomId) {
        this._firestoreGetLastMessage = firestore
          .collection("chatRooms")
          .doc(roomId)
          .collection("messages")
          .orderBy("createAt", "desc")
          .limit(1)
          .onSnapshot(data => {
            if (!data.empty) {
              const doc = data.docs[0];
              if (doc && doc.exists) {
                this.setState(per => ({ ...per, lastMessage: doc.data() }));
              }
            }
          });
      }
    }
  }
  componentWillUnmount() {
    if (this._firestoreGetLastMessage) {
      this._firestoreGetLastMessage();
    }
  }

  render() {
    const { user, status, selectedUser } = this.props;
    const { fullname, image, lastLogin, isLogin, uid } = user;
    const { lastMessage } = this.state;
    const active = selectedUser.uid === uid ? true : false;
    let message = null;
    let icon = null;
    if (!status) {
      icon =
        lastMessage.createdBy !== uid
          ? lastMessage.isSeen
            ? "Seen"
            : "Sent"
          : "Reply";
      message =
        String(lastMessage.message).length <= 40
          ? lastMessage.message
          : String(lastMessage.message)
              .slice(0, 40)
              .concat("...");
    }
    return (
      <div
        className={`messageBox flex-container ${active ? "active" : ""} ${
          !status
            ? lastMessage
              ? lastMessage.createdBy === uid
                ? !lastMessage.isSeen
                  ? "notSeen"
                  : null
                : null
              : null
            : null
        }`}
        onClick={this.handelChangeChat}
      >
        <div className="item">
          <img src={image} alt="" />
        </div>
        <div className="item">
          <h4>{fullname}</h4>
          {!status && (
            <p>
              <span className={`checkboxpath ${icon}`} /> &nbsp;
              {message}
            </p>
          )}
        </div>
        <div className="item">
          {/* <p>{}</p> */}
          <p>
            {status
              ? isLogin
                ? null
                : GetDate(lastLogin)
              : GetDate(lastMessage.createAt)}
          </p>
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
    changeSelectedUser: (uid, roomId) => {
      dispatch(ChangeSelectedUser(uid, roomId));
    }
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    selectedUser: state.chat
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect()
)(MessageBox);
