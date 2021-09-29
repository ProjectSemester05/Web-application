import {postRequest, getRequest} from "./api";
import { getAuthValues } from "./axios";

const URL = "reminder"

export const createReminder = (data) => postRequest(`${URL}/new`,data)

export const getReminders = () => getRequest(`${URL}/${getAuthValues("userID")}` )
