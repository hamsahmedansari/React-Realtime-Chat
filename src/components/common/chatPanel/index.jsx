import React from "react";
import Profile from "../profile";
import Message from "../message";
import IsTyping from "../isTyping";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ChatPanel = props => {
  console.log(props);

  const { userID, user } = props;
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
                <textarea placeholder="Enter Message" />
              </div>
              <div className="item">
                <button className="btn ">Send</button>
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
            <div className="item">
              <Message />
            </div>
            <div className="item">
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
              <textarea placeholder="Enter Message" />
            </div>
            <div className="item">
              <button className="btn ">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    user: ownProps.userID ? state.firestore.data.users[ownProps.userID] : {}
  };
};
export default connect(
  mapStateToProps,
  null
)(ChatPanel);
