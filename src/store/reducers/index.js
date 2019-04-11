import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import auth from "./auth";
import loading from "./loading";
import chat from "./chat";

export default combineReducers({
  chat,
  loading,
  auth,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
