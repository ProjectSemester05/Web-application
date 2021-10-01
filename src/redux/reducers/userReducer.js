import {UserActionTypes as actionTypes} from "../constants/action-types";

const initialState = {
  token: null,
  userID: null,
};

const logout = (state) => {
  return { ...state, token: null, userID: null };
};

const auth = (state, action) =>{
    return {...state, ...action.payload}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return auth(state, action);
    case actionTypes.AUTH_LOGOUT:
      return logout(state, action);
    default:
      return state;
  }
};

export default reducer;
