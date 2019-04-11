import React from "react";
import Profile from "../profile";
import Message from "../message";
import IsTyping from "../isTyping";

const ChatPanel = props => {
  const { userID } = props;
  console.log(props);
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
          {/* <Profile username={user.fullname} image={user.image} /> */}
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

export default ChatPanel;
