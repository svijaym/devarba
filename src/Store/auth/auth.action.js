import { GET_AUTH_FAILURE, GET_AUTH_SUCCESS, GET_TERMS_ACCEPTED } from "./auth.types";

export const UserLogin = (data) => (dispatch) => {
  try {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: GET_AUTH_SUCCESS, payload: json.token });
      });
  } catch (error) {
    dispatch({ type: GET_AUTH_FAILURE });
  }
};


export const handleTerms=()=>dispatch=>{
    try {
        dispatch({type:GET_TERMS_ACCEPTED})
        
    } catch (error) {
        
    }
}
export const handleLogout=()=>dispatch=>{
    try {
        dispatch({type:GET_AUTH_FAILURE})
        
    } catch (error) {
        
    }
}