import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Profile = props => {
  const { shortName, style, username, image } = props;
  return (
    <div className="profile flex-container" style={style}>
      <div className="item">
        <img src={image} alt="" />
      </div>
      <div className="item">
        <h4 style={{ maxWidth: shortName ? "90px" : "" }}>
          {String(username)}
        </h4>
        <p>
          <i className="fas fa-dot-circle" /> Online
        </p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  shortName: PropTypes.bool,
  style: PropTypes.object
};
export default Profile;
