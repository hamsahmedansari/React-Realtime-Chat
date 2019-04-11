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
    return users.filter(user => user.isLogin).length - 1;
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
