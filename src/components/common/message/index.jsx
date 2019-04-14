import React, { Component } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GetDate from "../../../common/getDate";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.refs.message.scrollIntoView();
  }
  render() {
    const { sibling, chat, users, uid, firestore, roomId, chatId } = this.props;
    // console.log(props);

    if (!chat) return false;

    const { createdBy, createAt, isSeen, message } = chat;
    const currentUsers = users ? users.find(a => a.uid === createdBy) : null;
    const mine = currentUsers.uid === uid ? true : false;

    if (!mine) {
      if (!isSeen) {
        firestore
          .collection("chatRooms")
          .doc(roomId)
          .collection("messages")
          .doc(chatId)
          .set(
            {
              isSeen: true
            },
            { merge: true }
          );
      }
    }

    return (
      // secondMessage
      <div
        className={`message flex-container ${sibling ? "secondMessage" : ""} ${
          mine ? "mine" : ""
        }`}
        ref="message"
      >
        {!mine && (
          <img
            src={currentUsers.image}
            alt=""
            className={`item animated faster flipInX}`}
          />
        )}
        <div
          className={`item message-body ${
            mine ? " animated faster fadeInRight" : "animated faster flipInY"
          }`}
        >
          <p>
            {String(message)
              .slice(0, 1)
              .toUpperCase()
              .concat(String(message).slice(1))}
          </p>
          <p>
            <span>
              {mine && <strong>{isSeen ? "Seen at" : "Delivered at"}</strong>}{" "}
              &nbsp;
            </span>
            {GetDate(createAt)} ago
          </p>
          <p>{/* <strong>Message Not Send</strong> */}</p>
        </div>
      </div>
    );
  }
}

// export default Message;

// const Message = props => {
//   // return (  );
//   const { sibling, chat, users, uid, firestore, roomId, chatId } = props;
//   // console.log(props);

//   if (!chat) return false;

//   const { createdBy, createAt, isSeen, message } = chat;
//   const currentUsers = users ? users.find(a => a.uid === createdBy) : null;
//   const mine = currentUsers.uid === uid ? true : false;

//   if (!mine) {
//     if (!isSeen) {
//       firestore
//         .collection("chatRooms")
//         .doc(roomId)
//         .collection("messages")
//         .doc(chatId)
//         .set(
//           {
//             isSeen: true
//           },
//           { merge: true }
//         );
//     }
//   }

//   return (
//     // secondMessage
//     <div
//       className={`message flex-container ${sibling ? "secondMessage" : ""} ${
//         mine ? "mine" : ""
//       }`}
//     >
//       {!mine && (
//         <img
//           src={currentUsers.image}
//           alt=""
//           className={`item animated faster flipInX}`}
//         />
//       )}
//       <div
//         className={`item message-body ${
//           mine ? " animated faster fadeInRight" : "animated faster flipInY"
//         }`}
//       >
//         <p>
//           {String(message)
//             .slice(0, 1)
//             .toUpperCase()
//             .concat(String(message).slice(1))}
//         </p>
//         <p>
//           <span>
//             {mine && <strong>{isSeen ? "Seen at" : "Delivered at"}</strong>}{" "}
//             &nbsp;
//           </span>
//           {GetDate(createAt)} ago
//         </p>
//         <p>{/* <strong>Message Not Send</strong> */}</p>
//       </div>
//     </div>
//   );
// };

Message.propTypes = {
  sibling: PropTypes.bool
  // mine: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  return {
    uid: state.firebase.auth.uid,
    users: state.firestore.ordered.users
    // roomId: state.chat.roomId
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect()
)(Message);
