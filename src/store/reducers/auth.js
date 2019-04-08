import actionType from "../constant/auth";
const InitialState = {
  status: false
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case actionType.AUTH_SUCCESS:
      return { ...state, status: true };
    case actionType.AUTH_FAILED:
      return { ...state, status: false };
    default:
      return state;
  }
};
