import {postRequest, getRequest} from "./api";

const URL = "catalogue"

export const createCatalogue = (data) => postRequest(`${URL}/new`,data)
