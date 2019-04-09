import action from "../constant/loading";

export function LoadingCreate(pram, head, body) {
  const status = pram ? pram : null;
  return (dispatch, getState) => {
    dispatch({ type: action.LOADING_CREATE, payload: { status, head, body } });
  };
}

export function LoadingRemove() {
  return (dispatch, getState) => {
    dispatch({ type: action.LOADING_REMOVE });
  };
}
