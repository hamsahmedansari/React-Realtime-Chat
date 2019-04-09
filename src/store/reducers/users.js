import actionType from "../constant/user";

const InitialState = {
  list: []
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_USERS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};
