import {
  GET_CARTS_ERROR,
  GET_CARTS_LOADING,
  GET_CARTS_SUCCESS,
} from "./cart.types";

const initState = {
  data: [],
  loading: false,
  error: false,
};

export const cartreducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CARTS_LOADING:
      return { ...state, loading: true };

    case GET_CARTS_SUCCESS:
      return { ...state, loading: false, data: payload };

    case GET_CARTS_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
