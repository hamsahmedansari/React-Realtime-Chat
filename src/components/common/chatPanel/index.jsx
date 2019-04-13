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
      chatsRooms: [],
      message: ""
    };
    this._fireStoreChatRooms = null;
    this._fireStoreAllChatRooms = null;
  }

  handelCreateChatRoom = () => {
    const { userID, uid, chat, createMessage, firestore } = this.props;
    const { message, chatsRooms } = this.state;
    const room = chatsRooms.find(chat => chat.withUserId === userID);
    let roomId = room ? room.roomUid : null;

    if (message.length > 0) {
      if (!roomId) {
        CreateChatRoom(firestore, uid, userID).then(id => {
          createMessage(id, uid, message);
        });
      } else {
        createMessage(roomId, uid, message);
      }
      this.setState({
        message: ""
      });
    }
  };
  handelChangeMessage = ({ currentTarget }) => {
    this.setState(per => ({ ...per, message: currentTarget.value }));
  };

  componentDidMount() {
    const { uid, firestore } = this.props;
    this._fireStoreAllChatRooms = firestore
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
            tempArrayOfChat.push({ roomUid, withUserId: id });
          }
        });
        this.setState({
          chatsRooms: tempArrayOfChat
        });
      });
  }
  componentWillUnmount() {
    if (this._fireStoreAllChatRooms) {
      this._fireStoreAllChatRooms();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { userID: newuserID, chat } = this.props;
    const { userID: olduserID } = prevProps;
    const { chatsRooms, chats } = this.state;
    if (newuserID) {
      const room = chatsRooms.find(chat => chat.withUserId === newuserID);
      if (room) {
        if (olduserID === newuserID || olduserID === "") {
          console.log("no room change just got update.!");

          if (room.roomUid) {
            if (!this._fireStoreChatRooms) {
              console.log("now subscribe");

              this._fireStoreChatRooms = this.getDataFromFirestore(
                room.roomUid
              );
            }
          }
        } else {
          if (this._fireStoreChatRooms) {
            this._fireStoreChatRooms();
          }
          if (room.roomUid) {
            console.log("getting data");
            this._fireStoreChatRooms = this.getDataFromFirestore(room.roomUid);
          }

          console.log("room change just got update.!");
        }
      } else {
        if (chats.length) {
          if (this._fireStoreChatRooms) {
            this._fireStoreChatRooms();
          }
          this.setState(per => ({ ...per, chats: [] }));
        }
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
              tempArrayOfMessage.push({
                message,
                uid: doc.id
              });
            }
          });
          this.setState(per => ({ ...per, chats: tempArrayOfMessage }));
        }
      });
  };

  render() {
    const { userID, user } = this.props;
    const { chats, message, chatsRooms } = this.state;

    const orderedChats = chats.sort((a, b) => {
      let date1 = new Date();
      date1.setTime(a.message.createAt);
      let date2 = new Date();
      date2.setTime(b.message.createAt);
      // console.log(date1, date2);
      return date1 - date2;
      // if (a > b) return -1;
      // else return 1;
    });

    // getRoomId
    const room = chatsRooms.find(chat => chat.withUserId === userID);
    let roomId = room ? room.roomUid : null;

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
                  <Message
                    chat={chat.message}
                    chatId={chat.uid}
                    roomId={roomId}
                  />
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
