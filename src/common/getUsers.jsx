import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const GetAllUsers = props => {
  const { users, type } = props;
  if (!users) return 0;

  if (type === "all") {
    return users.length - 1;
  }

  if (type === "online") {
    let tempUser = users.filter(user => user.isLogin).length;
    return tempUser > 0 ? tempUser - 1 : 0;
  }
};

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
)(GetAllUsers);
