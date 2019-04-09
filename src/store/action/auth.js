import action from "../constant/auth";
import { Redirect } from "react-router-dom";

const Login = (firebase, provider, dispatch) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      dispatch({
        type: action.AUTH_LOGIN_SUCCESS,
        payload: null
      });
    })
    .catch(err => {
      dispatch({
        type: action.AUTH_LOGIN_FAILED,
        payload: err.message
      });
    });
};

export function SignOut() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(data => {
        console.log(data);

        dispatch({ type: action.AUTH_LOGOUT_SUCCESS });
      });
  };
}

export function GoogleLogin() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.GoogleAuthProvider();
    Login(firebase, provider, dispatch);
  };
}

export function FacebookLogin() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.FacebookAuthProvider();
    Login(firebase, provider, dispatch);
  };
}

export function TwitterLogin() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.TwitterAuthProvider();
    Login(firebase, provider, dispatch);
  };
}

export function GithubLogin() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.GithubAuthProvider();
    Login(firebase, provider, dispatch);
  };
}

export function AnonymouslyLogin() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInAnonymously()
      .then(result => {
        dispatch({
          type: action.AUTH_LOGIN_SUCCESS,
          payload: null
        });
      })
      .catch(err => {
        dispatch({
          type: action.AUTH_LOGOUT_SUCCESS,
          payload: false
        });
      });
  };
}
