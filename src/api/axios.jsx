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
// if (token) instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;


export const getHeaderToken = () => {
    let token = getAuthValues("idToken");
    let userID = getAuthValues("userID");
    // if(process.env.REACT_APP_STATE =="TEST"){
    // userID = "9bb957ef-10ca-4994-8e97-510dfe057560";
      // console.log("inside test")
    // }
    // console.log(userID)
    return {headers: { Authorization: `Bearer ${token}`, UserID: userID}}
    // return {headers: { Authorization: `Bearer ${token}`}}
};

// instance.defaults.headers.common['Access-Control-Allow-Origin'] = `*`
// instance.defaults.headers.common['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept"
export default instance;

//https://n8l7szvh3j.execute-api.us-east-1.amazonaws.com/dev/catalogue-by-user/14082a4d-35d1-4450-97c3-393730cffa29
//https://n8l7szvh3j.execute-api.us-east-1.amazonaws.com/dev/catalogue-by-user/ad397421-c7df-4244-874e-816f1e650c68