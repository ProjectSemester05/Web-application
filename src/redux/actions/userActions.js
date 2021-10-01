import { UserActionTypes as actionTypes } from "../constants/action-types";
import { getAuthValues } from "../../api/axios";

export const logout = () => {
  //localStorage.removeItem("token");
  //localStorage.removeItem("expirationDate");
  //localStorage.removeItem("userID");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = () => {
  let token = getAuthValues("idToken");
  let userID = getAuthValues("userID");
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      token: token,
      userID: userID,
    },
  };
  //   });
};
