import axios from "./axios";
import {getHeaderToken} from "./axios"

export const getRequest = async (url, body) => {
  try {
    let response = body ? await axios.get(url, body,getHeaderToken()) : await axios.get(url,{},getHeaderToken());
        return {...response.data, success: true};

  } catch (error) {
    console.log("Inside the error");
    return {...error, success: false};
  }
};

export const postRequest = async (url, data) => {
  try {
    let response = await axios.post(url, data,getHeaderToken());
    console.log(response);
    return {...response.data, success: true};
  } catch (error) {
    return {...error, success: false};
  }
};

export const putRequest = async (url, data) => {
  try {
    let response = await axios.put(url, data,getHeaderToken());
        return {...response.data, success: true};

  } catch (error) {
    return {...error, success: false};
  }
};

export const deleteRequest = async (url) => {
  try {
    let response = await axios.delete(url,{},getHeaderToken());
    console.log(response);
    return {...response.data, success: true};

  } catch (error) {
    return {...error, success: false};
  }
};
