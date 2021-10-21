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


const token = getAuthValues("idToken");
if (token) instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;


export const getHeaderToken = () => {
    let token = getAuthValues("idToken");
    let userID = getAuthValues("userID");
    return {headers: { Authorization: `Bearer ${token}`, UserID: userID}}
};

instance.defaults.headers.common['Access-Control-Allow-Origin'] = `*`
instance.defaults.headers.common['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept"
export default instance;