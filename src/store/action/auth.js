import actionAuth from "../constant/auth";
import actionLoading from "../constant/loading";

const Login = (firebase, provider, dispatch) => {
  dispatch({
    type: actionLoading.LOADING_CREATE,
    payload: {
      status: "warning",
      head: "Please Wait",
      body: "Complete SingIn in order to proceed"
    }
  });
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      dispatch({
        type: actionAuth.AUTH_LOGIN_SUCCESS,
        payload: null
      });
    })
    .catch(err => {
      dispatch({
        type: actionAuth.AUTH_LOGIN_FAILED,
        payload: err.message
      });
      dispatch({
        type: actionLoading.LOADING_CREATE,
        payload: {
          status: "danger",
          head: "Error In Signing",
          body: err.message
        }
      });
      setTimeout(() => {
        dispatch({ type: actionLoading.LOADING_REMOVE });
      }, 3000);
    });
};

export function SignOut() {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({
      type: actionLoading.LOADING_CREATE,
      payload: {}
    });
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(data => {
        dispatch({ type: actionAuth.AUTH_LOGOUT_SUCCESS });
        dispatch({ type: actionLoading.LOADING_REMOVE });
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
    dispatch({
      type: actionLoading.LOADING_CREATE,
      payload: {
        status: "warning",
        head: "Please Wait",
        body: null
      }
    });
    const firebase = getFirebase();
    firebase
      .auth()
      .signInAnonymously()
      .then(result => {
        dispatch({
          type: actionAuth.AUTH_LOGIN_SUCCESS,
          payload: null
        });
      })
      .catch(err => {
        dispatch({
          type: actionAuth.AUTH_LOGIN_FAILED,
          payload: false
        });
        dispatch({
          type: actionLoading.LOADING_CREATE,
          payload: {
            status: "danger",
            head: "Error In Signing",
            body: err.message
          }
        });
        setTimeout(() => {
          dispatch({ type: actionLoading.LOADING_REMOVE });
        }, 3000);
      });
  };
}
