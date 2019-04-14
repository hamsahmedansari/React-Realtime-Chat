import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import MessageBox from "../messageBox";

const Online = props => {
  if (!props.users) return false;
  return (
    <React.Fragment>
      {props.users.map((user, i) => {
        if (user.uid === props.currentUserUid) {
          return false;
        }
        if (!user.isLogin) {
          return false;
        }
        return (
          <div className="item" key={i}>
            <MessageBox status={true} user={user} />
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
    users: state.firestore.ordered.users,
    currentUserUid: state.firebase.auth.uid
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect([{ collection: "users" }])
)(Online);
