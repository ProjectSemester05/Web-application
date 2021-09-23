import { postRequest } from "./api";

const URL = "user";

export const registerUser = (data) => {
  return postRequest(`${URL}/new`, data);
};

export const login = (data) => {
  return {
    data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySUQiOiIxMjMiLCJpYXQiOjE2MzIzMDEwMTcsImV4cCI6MTYzMjMwNDYxN30.NV8Qiu37JQz5ER_CgWq8caubVdTenaHwCsdbF_0lqtM",
  };
};
