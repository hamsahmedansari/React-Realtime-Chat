import React from "react";
import "./style.scss";

const Profile = props => {
  const { shortName, style } = props;
  return (
    <div className="profile flex-container" style={style}>
      <div className="item">
        <img src="/assets/images/2.jpeg" alt="" />
      </div>
      <div className="item">
        <h4 style={{ maxWidth: shortName ? "90px" : "" }}>Hams Ahmed Asnari</h4>
        <p>
          <i className="fas fa-dot-circle" /> Online
        </p>
      </div>
    </div>
  );
};

export default Profile;
