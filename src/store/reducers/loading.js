import actionType from "../constant/loading";

const InitialState = {
  status: false,
  type: null,
  head: null,
  body: null
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case actionType.LOADING_CREATE:
      const { status, head, body } = action.payload;
      const type = status ? status : null;
      return {
        ...state,
        status: true,
        type,
        head,
        body
      };
    case actionType.LOADING_REMOVE:
      return {
        ...state,
        status: false,
        type: null,
        head: null,
        body: null
      };
    default:
      return state;
  }
};
