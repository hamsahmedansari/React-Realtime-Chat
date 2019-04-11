import action from "../constant/chat";

export function ChangeSelectedUser(uid) {
  return (dispatch, getState) => {
    dispatch({ type: action.CHANGE_SELECTED_USER, payload: { uid } });
  };
}
