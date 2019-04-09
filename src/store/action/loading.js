import action from "../constant/loading";

export function LoadingCreate() {
  return (dispatch, getState) => {
    dispatch({ type: action.LOADING_CREATE });
  };
}

export function LoadingRemove() {
  return (dispatch, getState) => {
    dispatch({ type: action.LOADING_REMOVE });
  };
}
