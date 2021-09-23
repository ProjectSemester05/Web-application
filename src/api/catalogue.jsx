import {postRequest, getRequest} from "./api";

const URL = "catalogue"

export const createCatalogue = (data) => postRequest(`${URL}/new`,{...data, UserID: "02647873-2583-44df-99b0-29d3ec736370"})

export const getCatalogues = () => getRequest(`${URL}/02647873-2583-44df-99b0-29d3ec736370` )

