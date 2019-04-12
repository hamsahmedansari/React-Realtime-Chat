import React, { Component } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GetDate from "../../../common/getDate";

const Message = props => {
  // return (  );
  const { sibling, chat, users, uid } = props;
  // console.log(props);

  if (!chat) return false;
  const { createdBy, createAt, isSeen, message } = chat;
  const currentUsers = users ? users.find(a => a.uid === createdBy) : null;
  const mine = currentUsers.uid === uid ? true : false;
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
          {String(message)
            .slice(0, 1)
            .toUpperCase()
            .concat(String(message).slice(1))}
        </p>
        <p>
          <span>
            <strong>{isSeen ? "Seen at" : "Delivered at"}</strong> &nbsp;
          </span>
          {GetDate(createAt)} ago
        </p>
        <p>{/* <strong>Message Not Send</strong> */}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  sibling: PropTypes.bool
  // mine: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  return {
    uid: state.firebase.auth.uid,
    users: state.firestore.ordered.users
  };
};

export default connect(
  mapStateToProps,
  null
)(Message);
