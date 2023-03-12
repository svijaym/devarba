import {
    GET_CARTS_ERROR,
    GET_CARTS_LOADING,
    GET_CARTS_SUCCESS,
  } from "./cart.types";
  

export const AddtoCart = (data, id) => (dispatch) => {
    dispatch({ type: GET_CARTS_LOADING });
    try {
      let arr = data?.map((e) => (e.id == id ? { ...e, added: true } : e))
      dispatch({ type: GET_CARTS_SUCCESS, payload: arr });
    } catch (error) {
      dispatch({ type: GET_CARTS_ERROR });
    }
  };
  