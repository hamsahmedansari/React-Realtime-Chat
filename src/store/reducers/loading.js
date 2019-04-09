import actionType from "../constant/loading";

const InitialState = {
  status: false
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case actionType.LOADING_CREATE:
      return {
        ...state,
        status: true
      };
    case actionType.LOADING_REMOVE:
      return {
        ...state,
        status: false
      };
    default:
      return state;
  }
};
