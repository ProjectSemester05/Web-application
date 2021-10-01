import {postRequest, getRequest, deleteRequest} from "./api";
import { getAuthValues } from "./axios";

const URL = "item"

export const createItem = (data) => postRequest(`${URL}/new`,{...data, UserID: getAuthValues("userID")})

export const getItems = (uuid) => getRequest(`${URL}-by-catalogue-uuid/${uuid}` )

export const deleteItem = (uuid) => deleteRequest(`${URL}/${uuid}` )
