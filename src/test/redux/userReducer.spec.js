import reducer from "../../redux/reducers/userReducer";
import * as actions from "../../redux/actions/userActions";
import * as axios from "../../api/axios";

describe("user redux tests", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userID: null,
      email: null,
      firstName: null,
      lastName: null,
      provider: false,
    });
  });

  test("should handle a logout", () => {
    const previousState = {
      token: "abc",
      userID: "123",
      email: "poorna2152@gmail.com",
      firstName: "Poorna",
      lastName: "Gunathilaka",
      provider: false,
    };
    expect(reducer(previousState, actions.logout())).toEqual({
      token: null,
      userID: null,
      email: null,
      firstName: null,
      lastName: null,
      provider: false,
    });
  });

  test("should handle auth", () => {
    const mock = jest
      .spyOn(axios, "getAuthValues")
      .mockImplementation(() => "abc");
    const previousState = {
      token: null,
      userID: null,
      email: null,
      firstName: null,
      lastName: null,
      provider: false,
    };
    expect(reducer(previousState, actions.auth())).toEqual({
      token: "abc",
      userID: "abc",
      email: null,
      firstName: null,
      lastName: null,
      provider: false,
    });
  });

  test("should set user info", () => {
    const mock = jest
      .spyOn(axios, "getAuthValues")
      .mockImplementation(() => "abc");
    const previousState = {
      token: null,
      userID: null,
      email: null,
      firstName: null,
      lastName: null,
      provider: false,
    };
    let data = {
      token: "abc",
      userID: "123",
      email: "poorna2152@gmail.com",
      firstName: "Poorna",
      lastName: "Gunathilaka",
      provider: false,
    };
    expect(reducer(previousState, actions.setUserInfo(data))).toEqual(data);
  });
});
