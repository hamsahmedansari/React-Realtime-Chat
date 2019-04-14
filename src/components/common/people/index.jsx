import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import MessageBox from "../messageBox";
// import GetDate from "../../../common/getDate";

const People = props => {
  if (!props.users) return false;
  const { users, search } = props;
  let sortUsers = [];
  let tempUsers = users;
  if (search.length > 0) {
    tempUsers = users.filter(user =>
      String(user.fullname)
        .toLowerCase()
        .indexOf(String(search).toLowerCase()) !== -1
        ? user
        : false
    );
  }
  try {
    sortUsers = tempUsers.sort((a, b) => (a.isLogin ? -1 : 1));
  } catch (error) {
    console.log(error);
    sortUsers = users;
  }

  return (
    <React.Fragment>
      {sortUsers.map((user, i) => {
        if (user.uid === props.currentUserUid) {
          return false;
        }
        // let date = "";
        // if (!user.isLogin) {
        //   date = GetDate(user.lastLogin);
        // }
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
)(People);
