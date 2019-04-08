import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import auth from "./auth";

export default combineReducers({
  auth,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
