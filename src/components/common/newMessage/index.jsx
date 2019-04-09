import React from "react";
import MessageBox from "../messageBox";

const NewMessage = () => {
  return (
    <React.Fragment>
      <div className="item">
        <MessageBox />
      </div>
      <div className="item">
        <MessageBox active={true} />
      </div>
    </React.Fragment>
  );
};

export default NewMessage;
