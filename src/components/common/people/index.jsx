import React from "react";
import { connect } from "react-redux";

import MessageBox from "../messageBox";

const People = props => {
  if (!props.users) return false;
  return (
    <React.Fragment>
      {props.users.map((user, i) => (
        <div className="item" key={i}>
          <MessageBox
            status={true}
            name={user.fullname}
            image={user.image}
            date={user.lastLogin}
            online={user.isLogin}
          />
        </div>
      ))}
    </React.Fragment>
  );
};
//
// export default People;

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.list
  };
};

export default connect(
  mapStateToProps,
  null
)(People);
