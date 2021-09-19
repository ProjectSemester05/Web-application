import {postRequest, getRequest} from "./api";

const URL = "user"

export const registerUser = (data) => {
    postRequest(`${URL}/new`,data)
}
