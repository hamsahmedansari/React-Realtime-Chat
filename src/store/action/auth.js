export function GoogleLogin(param) {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "acb", payload: null });
  };
}
