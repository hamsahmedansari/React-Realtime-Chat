import React from "react";
import "./style.scss";

const IsTyping = props => {
  const { image } = props;
  return (
    <div className={`typing flex-container`}>
      <img src={image} alt="" className="item" />
      <div className="item message-body">
        <p>
          <i className="fas fa-dot-circle" style={{ animationDelay: "0.3s" }} />
          <i className="fas fa-dot-circle" style={{ animationDelay: "0.5s" }} />
          <i className="fas fa-dot-circle" style={{ animationDelay: "0.1s" }} />
        </p>
      </div>
    </div>
  );
};

// export default IsTyping;

export default IsTyping;
