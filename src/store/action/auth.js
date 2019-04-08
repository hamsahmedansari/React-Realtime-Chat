import action from "../constant/auth";

const Login = (firebase, provider, dispatch) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      dispatch({
        type: action.AUTH_SUCCESS,
        payload: null
      });
    })
    .catch(err => {
      dispatch({
        type: action.AUTH_FAILED,
        payload: false
      });
    });
};

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
          type: action.AUTH_SUCCESS,
          payload: null
        });
      })
      .catch(err => {
        dispatch({
          type: action.AUTH_FAILED,
          payload: false
        });
      });
  };
}
