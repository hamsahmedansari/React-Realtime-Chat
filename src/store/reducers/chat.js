import actionType from "../constant/chat";

const InitialState = {
  uid: ""
};
export default (state = InitialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_SELECTED_USER:
      return { ...state, uid: action.payload.uid };
    default:
      return state;
  }
};
