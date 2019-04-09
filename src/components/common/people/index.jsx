import React from "react";
import MessageBox from "../messageBox";

const People = () => {
  return (
    <React.Fragment>
      <div className="item">
        <MessageBox status={true} />
      </div>
      <div className="item">
        <MessageBox status={true} active={true} />
      </div>
    </React.Fragment>
  );
};

export default People;
