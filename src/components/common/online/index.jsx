import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import MessageBox from "../messageBox";
import GetDate from "../date";

const Online = props => {
  if (!props.users) return false;
  return (
    <React.Fragment>
      {props.users.map((user, i) => {
        let date = "";
        if (!user.isLogin) {
          return false;
        }
        return (
          <div className="item" key={i}>
            <MessageBox
              status={true}
              name={user.fullname}
              image={user.image}
              date={date}
              online={user.isLogin}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
};
//
// export default People;

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.firestore.ordered.users
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect([{ collection: "users" }])
)(Online);
