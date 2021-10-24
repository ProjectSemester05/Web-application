import {postRequest, getRequest, deleteRequest} from "./api";
import { getAuthValues } from "./axios";

const URL = "reminder"

export const createReminder = (data) => postRequest(`${URL}/new`,data)

export const getReminders = () => getRequest(`reminder-by-user` )

export const getItemReminders = (ItemUUID) => getRequest(`reminder-by-item/${ItemUUID}`)

export const deleteReminder = (UUID) => deleteRequest(`reminder/${UUID}`)

// export const updateReminder = (UUID) => deleteReminder(`reminder/${UUID}`)


