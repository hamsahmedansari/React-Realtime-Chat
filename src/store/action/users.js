import action from "../constant/user";

export function getAllUser() {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = [];
    firestore
      .collection("users")
      .get()
      .then(collections => {
        collections.docs.forEach(element => {
          user.push(element.data());
        });
        dispatch({
          type: action.GET_ALL_USERS,
          payload: user
        });
      });
  };
}
