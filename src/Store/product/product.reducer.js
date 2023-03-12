import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

const initState = {
  data: [],
  loading: false,
  error: false,
  flag:false
};

export const productreducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS_LOADING:
      return { ...state, loading: true };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: payload ,flag:!state.flag};

    case GET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
