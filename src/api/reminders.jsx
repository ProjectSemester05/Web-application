import {postRequest, getRequest, deleteRequest,putRequest} from "./api";

const URL = "reminder"

export const createReminder = (data) => postRequest(`${URL}/new`,data)

export const getReminders = () => getRequest(`reminder-by-user` )

export const getItemReminders = (ItemUUID) => getRequest(`reminder-by-item/${ItemUUID}`)

export const deleteReminder = (UUID) => deleteRequest(`reminder/${UUID}`)

export const updateReminder = (data) => putRequest(`reminder/edit`, data)


