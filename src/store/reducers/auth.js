import actionType from "../constant/auth";
const InitialState = {
  status: { isError: null, message: null }
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case actionType.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        status: {
          isError: true,
          message: "Successfully Login"
        }
      };
    case actionType.AUTH_LOGIN_FAILED:
      return {
        ...state,
        status: {
          status: false,
          message: action.payload
        }
      };
    case actionType.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        status: {
          isError: null,
          message: null
        }
      };
    default:
      return state;
  }
};
