import actionAuth from "../constant/auth";
import actionLoading from "../constant/loading";

const Login = (firebase, firestore, provider, dispatch, getState) => {
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
    .then(res => {
      return firestore
        .collection("users")
        .doc(res.user.uid)
        .set({
          fullname: res.user.displayName,
          image: res.user.photoURL,
          isLogin: true,
          lastLogin: new Date().getTime().toString(),
          uid: res.user.uid
        });
    })
    .then(res => {
      const { auth } = getState().firebase;

      dispatch({
        type: actionAuth.AUTH_LOGIN_SUCCESS,
        payload: {
          fullname: auth.displayName,
          image: auth.photoURL
        }
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
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: actionLoading.LOADING_CREATE,
      payload: {}
    });
    const firebase = getFirebase();
    const firestore = getFirestore();
    const { uid } = getState().firebase.auth;
    firestore
      .collection("users")
      .doc(uid)
      .set(
        {
          isLogin: false
        },
        { merge: true }
      )
      .then(() => {
        firebase
          .auth()
          .signOut()
          .then(data => {
            dispatch({ type: actionAuth.AUTH_LOGOUT_SUCCESS });
            dispatch({ type: actionLoading.LOADING_REMOVE });
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
            head: "Error In Signing Out",
            body: err.message
          }
        });
        setTimeout(() => {
          dispatch({ type: actionLoading.LOADING_REMOVE });
        }, 3000);
      });
  };
}

export function GoogleLogin() {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const provider = new firebase.auth.GoogleAuthProvider();
    Login(firebase, firestore, provider, dispatch, getState);
  };
}

export function FacebookLogin() {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const provider = new firebase.auth.FacebookAuthProvider();
    Login(firebase, firestore, provider, dispatch, getState);
  };
}

export function TwitterLogin() {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const provider = new firebase.auth.TwitterAuthProvider();
    Login(firebase, firestore, provider, dispatch, getState);
  };
}

export function GithubLogin() {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const provider = new firebase.auth.GithubAuthProvider();
    Login(firebase, firestore, provider, dispatch, getState);
  };
}

export function AnonymouslyLogin(pram) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: actionLoading.LOADING_CREATE,
      payload: {
        status: "warning",
        head: "Please Wait",
        body: "We are Loading All Your Data it take some time.!!"
      }
    });

    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .signInAnonymously()
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            fullname: pram.username,
            image: pram.img,
            isLogin: true,
            lastLogin: new Date().getTime().toString(),
            uid: res.user.uid
          });
      })
      .then(data => {
        dispatch({
          type: actionAuth.AUTH_LOGIN_SUCCESS,
          payload: {
            fullname: pram.username,
            image: pram.img
          }
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
