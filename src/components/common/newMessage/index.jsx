import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import MessageBox from "../messageBox";

class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRooms: []
    };
    this.ChatSubscription = null;
  }
  componentDidMount() {
    const { uid, firestore } = this.props;
    // const { chatRooms } = this.state;
    this.ChatSubscription = firestore
      .collection("users")
      .doc(uid)
      .collection("chatRooms")
      .onSnapshot(data => {
        const tempArrayOfChat = [];
        data.forEach(function(doc) {
          if (doc && doc.exists) {
            const { roomUid } = doc.data();
            const { id } = doc;
            // DO SOMETHING
            tempArrayOfChat.push({
              roomUid,
              userUid: id
            });
          }
        });
        this.setState({
          chatRooms: tempArrayOfChat
        });
      });
  }
  componentWillUnmount() {
    // this.ChatSubscription();
  }
  render() {
    const { chatRooms } = this.state;
    const { users } = this.props;
    if (!users) return false;
    const myUsersWithChat = users
      .map(user => {
        for (const room of chatRooms) {
          if (room.userUid === user.id) {
            return {
              chatRoomId: room.roomUid,
              user
            };
          }
        }
        return false;
      })
      .filter(userWithRoom => userWithRoom);

    return (
      <React.Fragment>
        {myUsersWithChat &&
          myUsersWithChat.map((chat, i) => (
            <div className="item" key={i}>
              {/* <MessageBox user={chat.user} roomId={} /> */}
              <MessageBox user={chat.user} roomId={chat.chatRoomId} />
            </div>
          ))}
      </React.Fragment>
    );
  }
}

// export default NewMessage;

// export default NewMessage;
const mapStateToProps = (state, ownProps) => {
  return {
    uid: state.firebase.auth.uid,
    users: state.firestore.ordered.users
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // dispatch1: () => {
    //   dispatch(actionCreator)
    // }
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect()
)(NewMessage);
