import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";

import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";

import allReducer from "./reducers";
import fbconfig from "../firebase/";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument({ getFirebase, getFirestore })
    // createLogger()
  ),
  reduxFirestore(fbconfig),
  reduxReactFirebase(fbconfig)
);
const store = createStore(allReducer, enhancer);

export default store;
