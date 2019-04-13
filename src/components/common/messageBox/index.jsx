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
      console.log(roomId);

      if (roomId) {
        this._firestoreGetLastMessage = firestore
          .collection("chatRooms")
          .doc(roomId)
          .collection("messages")
          .get()
          .then(data => {
            if (!data.empty) {
              const lastData = data[data.length - 1].data();
              this.setState({
                lastMessage: lastData
              });
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
