import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import auth from "./auth";
import loading from "./loading";
import users from "./users";

export default combineReducers({
  users,
  loading,
  auth,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
