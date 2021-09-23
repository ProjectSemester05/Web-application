import { login } from "../../api/user";
import jwt_decode from "jwt-decode";
import { UserActionTypes as actionTypes } from "../constants/action-types";

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userID");
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

export const auth = (email, password) => {
  const authData = {
    email: email,
    password: password,
  };
  console.log(authData);
  //   login(authData).then((result) => {
  let result = login(authData);
  console.log(result);
  if (result.data) {
    let decoded = jwt_decode(result.data);
    let expiresIn = decoded.expiresIn;
    let userID = decoded.userID;

    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    localStorage.setItem("token", result.data);
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("userID", userID);

    return {
      type: actionTypes.AUTH_SUCCESS,
      payload: {
        token: result.data,
        userID: userID,
      },
    };
  } else {
    console.log("Auth failed");
  }
  //   });
};
