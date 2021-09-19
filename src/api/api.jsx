import axios from "./axios";

export const getRequest = async (url, body) => {
  try {
    let response = body ? await axios.get(url, body) : await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postRequest = async (url, data) => {
  try {
    let response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const putRequest = async (url, data) => {
  try {
    let response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteRequest = async (url) => {
  try {
    let response = await axios.delete(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
