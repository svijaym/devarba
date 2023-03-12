import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => {
        let arr = res.map((e) =>
          !e.quantity ? { ...e, quantity: 1, added: false } : e
        );
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: arr });
        return arr;
      });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const ChangeQuanity = (data, id, val) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let arr = data?.map((e) => (e.id === id ? { ...e, quantity: val } : e));
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: arr });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
export const AddtoCart = (data, id) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let arr = data?.map((e) => (e.id == id ? { ...e, added: true } : e))
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: arr });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
