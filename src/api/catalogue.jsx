import {postRequest, getRequest} from "./api";
import { getAuthValues } from "./axios";

const URL = "catalogue"

export const createCatalogue = (data) => postRequest(`${URL}/new`,{...data, UserID:getAuthValues("userID") })

export const getCatalogues = () => getRequest(`${URL}-by-user/${getAuthValues("userID")}` )
