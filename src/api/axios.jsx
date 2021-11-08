import axios from 'axios';

import { BASE_API } from '../utils/constants';

const instance = axios.create({
    baseURL: BASE_API
});


export const getAuthValues = (type) => {
    let keys = Object.keys(localStorage)
    let result = ""
    keys.forEach((key) =>{
      if(key.includes("idToken") && type==="idToken"){
        result =localStorage.getItem(key)

      }
      else if(key.includes("userData") && type==="userID"){
        result =JSON.parse(localStorage.getItem(key)).UserAttributes[0].Value
      }
    })
    return result;
} 


export const getHeaderToken = () => {
    let token = getAuthValues("idToken");
    let userID = getAuthValues("userID");
    // if(process.env.REACT_APP_STATE =="TEST"){
    // userID = "9bb957ef-10ca-4994-8e97-510dfe057560";
    // }
    // console.log(userID)
    return {headers: { Authorization: `Bearer ${token}`, UserID: userID}}
    // return {headers: { Authorization: `Bearer ${token}`}}
};

export default instance;
