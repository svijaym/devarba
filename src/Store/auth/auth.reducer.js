import {
  GET_AUTH_FAILURE,
  GET_AUTH_SUCCESS,
  GET_TERMS_ACCEPTED,
} from "./auth.types";

const initState = {
  accepted: false,
  token: "",
  auth: false,
  loading: false,
  error: false,
};

export const authreducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_AUTH_SUCCESS:
      return { ...state, token: payload, auth: true };
    case GET_AUTH_FAILURE:
      return { ...state, auth: false, token: "" };
    case GET_TERMS_ACCEPTED:
      return { ...state, accepted: true };
    default:
      return state;
  }
};
