import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import config from "./config";

// Init App
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
