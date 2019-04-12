import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import Profile from "../profile";
import Message from "../message";
import IsTyping from "../isTyping";
import { CreateChatRoom, CreateMessage } from "../../../store/action/chat";

class ChatPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      message: ""
    };
    this._fireStoreChatRooms = null;
  }

  handelCreateChatRoom = () => {
    const { userID, uid, chat, createMessage, firestore } = this.props;
    const { message } = this.state;
    if (message.length > 0) {
      let roomId = chat.roomId;
      if (!roomId) {
        CreateChatRoom(firestore, uid, userID).then(id => (roomId = id));
      }
      createMessage(roomId, uid, message);
      this.setState({
        message: ""
      });
    }
  };
  handelChangeMessage = ({ currentTarget }) => {
    this.setState(per => ({ ...per, message: currentTarget.value }));
  };
  componentDidUpdate(prevProps, prevState) {
    const { userID: newuserID, chat } = this.props;
    const { userID: olduserID } = prevProps;
    if (newuserID) {
      if (olduserID === newuserID || olduserID === "") {
        console.log("no room change just got update.!");
        if (chat.roomId) {
          if (!this._fireStoreChatRooms) {
            this._fireStoreChatRooms = this.getDataFromFirestore(chat.roomId);
          }
        }
      } else {
        if (this._fireStoreChatRooms) {
          this._fireStoreChatRooms();
          if (chat.roomId) {
            this._fireStoreChatRooms = this.getDataFromFirestore(chat.roomId);
          }
        }

        console.log("room change just got update.!");
      }
    }
  }

  getDataFromFirestore = uid => {
    const { firestore } = this.props;
    return firestore
      .collection("chatRooms")
      .doc(uid)
      .collection("messages")
      .onSnapshot(data => {
        if (!data.empty) {
          const tempArrayOfMessage = [];
          data.forEach(function(doc) {
            if (doc && doc.exists) {
              const message = doc.data();
              // const { id } = doc;
              // DO SOMETHING
              tempArrayOfMessage.push(message);
            }
          });
          this.setState(per => ({ ...per, chats: tempArrayOfMessage }));
        }
      });
  };

  render() {
    const { userID, user } = this.props;
    const { chats, message } = this.state;
    console.log(chats);

    const orderedChats = chats.sort((a, b) => {
      let date1 = new Date();
      date1.setTime(a.createAt);
      let date2 = new Date();
      date2.setTime(b.createAt);
      // console.log(date1, date2);
      return date1 - date2;
      // if (a > b) return -1;
      // else return 1;
    });
    if (!userID)
      return (
        <div className="item">
          <div className="flex-container">
            {/* Header */}
            <div className="item" />
            {/* Chat */}
            <div className="item">
              <div className="flex-container">
                <div className="item">
                  {/* <Message /> */}
                  No Chat Selected
                </div>
              </div>
            </div>
            {/* Action */}
            <div className="item">
              <div className="flex-container">
                <div className="item">
                  <div className="fas fa-camera" />
                </div>
                <div className="item">
                  <textarea placeholder="Enter Message" disabled />
                </div>
                <div className="item">
                  <button className="btn" disabled>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    return (
      <div className="item">
        <div className="flex-container">
          {/* Header */}
          <div className="item">
            <Profile
              username={user.fullname}
              image={user.image}
              isOnline={user.isLogin}
            />
          </div>
          {/* Chat */}
          <div className="item">
            <div className="flex-container">
              {orderedChats.map((chat, i) => (
                <div className="item" key={i}>
                  <Message chat={chat} />
                </div>
              ))}
              {/* <div className="item">
                <Message sibling={true} />
              </div>
              <div className="item">
                <Message mine={true} />
              </div>
              <div className="item">
                <Message sibling={true} mine={true} />
              </div>
              <div className="item">
                <Message />
              </div>
              <div className="item">
                <Message mine={true} />
              </div>
              <div className="item">
                <IsTyping />
              </div> */}
            </div>
          </div>
          {/* Action */}
          <div className="item">
            <div className="flex-container">
              <div className="item">
                <div className="fas fa-camera" />
              </div>
              <div className="item">
                <textarea
                  placeholder="Enter Message"
                  onChange={this.handelChangeMessage}
                  value={message}
                />
              </div>
              <div className="item">
                <button className="btn" onClick={this.handelCreateChatRoom}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    uid: state.firebase.auth.uid,
    user: ownProps.userID ? state.firestore.data.users[ownProps.userID] : {},
    chat: state.chat
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // createChatRoom: (ownUid, secondUid) => {
    //   dispatch(CreateChatRoom(ownUid, secondUid));
    // },
    createMessage: (roomId, ownUid, message) => {
      dispatch(CreateMessage(roomId, ownUid, message));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect()
)(ChatPanel);
