import {postRequest, getRequest, deleteRequest, putRequest} from "./api";
import { getAuthValues } from "./axios";

const URL = "catalogue"

export const createCatalogue = (data) => postRequest(`${URL}/new`,{...data, UserID:getAuthValues("userID") })

export const getCatalogues = () => getRequest(`${URL}-by-user-id/${getAuthValues("userID")}` )

export const getChildrenCatalogues = (uuid) => getRequest(`child-catalogue/${uuid}` )

export const deleteCatalogue = (uuid) => deleteRequest(`${URL}/${uuid}` )

export const updateCatalogue = (data) => putRequest(`${URL}/edit`,{...data, UserID:getAuthValues("userID") } )
