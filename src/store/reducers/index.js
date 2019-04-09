import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import auth from "./auth";
import loading from "./loading";

export default combineReducers({
  loading,
  auth,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
