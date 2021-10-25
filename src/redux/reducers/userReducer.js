import {UserActionTypes as actionTypes} from "../constants/action-types";

const initialState = {
  token: null,
  userID: null,
  email: null,
  firstName:null,
  lastName:null,
  provider: false
};

const logout = (state) => {
  return {
    token: null,
    userID: null,
    email: null,
    firstName:null,
    lastName:null,
    provider: false
  };
};

const auth = (state, action) =>{
    return {...state, ...action.payload}
}

const setUserInfo = (state,action) => {
  return {...state,...action.payload}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return auth(state, action);
    case actionTypes.AUTH_LOGOUT:
      return logout(state, action);
    case actionTypes.USER_INFO:
      return setUserInfo(state, action);
    default:
      return state;
  }
};

export default reducer;
