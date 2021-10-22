import {postRequest, getRequest, deleteRequest, putRequest} from "./api";
import { getAuthValues } from "./axios";

const URL = "item"

export const createItem = (data) => postRequest(`${URL}/new`,{...data, UserID: getAuthValues("userID")})

export const getItems = (uuid) => getRequest(`${URL}-by-catalogue-uuid/${uuid}` )

export const deleteItem = (uuid) => deleteRequest(`${URL}/${uuid}` )

export const updateItem = (uuid) => putRequest(`${URL}/${uuid}` )
