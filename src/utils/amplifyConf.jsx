import Amplify, { Auth } from "aws-amplify";
import {config} from "../config/config";

Amplify.configure({
  Auth: {
    identityPoolId: config.IDENTITY_POOL_ID,

    region: config.REGION,
    identityPoolRegion: config.IDENTITY_POOL_REGION,

    userPoolId: config.USER_POOL_ID,

    userPoolWebClientId: config.USER_POOL_WEB_CLIENT,
    oauth: {
      domain: config.DOMAIN,
      redirectSignIn: config.REDIRECT_SIGN_IN,
      redirectSignOut: config.REDIRECT_SIGN_OUT,
      responseType: config.RESPONSE_TYPE
    },
  },
});

export const signUp = async (name, email, password) => {
  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        name,
        email,
      },
    });
    return { result: user, success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};

export const lwaSignUp = async () => {
  try {
    let result = await Auth.federatedSignIn({ provider: "LoginWithAmazon" });
    console.log(result);
    return { result: result, success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};

export const signIn = async (email, password) => {
  try {
    const user = await Auth.signIn(email, password);
    return { result: user, success: true };
  } catch (error) {
    return { error: error, success: false };
  }
};

export const confirmSignUp = async (email, code) => {
  try {
    let result = await Auth.confirmSignUp(email, code);
    return { result: result, success: true };
  } catch (error) {
    return { error: error, success: false };
  }
};

export const resendConfirmationCode = async (email) => {
  try {
    let result = await Auth.resendSignUp(email);
    return { result: result, success: true };
  } catch (error) {
    return { error: error, success: false };
  }
};


export const forgotPasswordEmail = async (email) => {
  try{
    let result = await Auth.forgotPassword(email)
    console.log(result);
    return {result: result, success: true};
  } 
  catch(error){
    return {error: error, success: false};
  } 
}

export const forgotPasswordSubmit =async (email, code, new_password) =>{
  try{
    let result = await Auth.forgotPasswordSubmit(email, code, new_password)
    return {result:result, success: true}
  }
  catch(error){
    return {error:error, success: false}
  }
}

export const getUser = async () => {
  try{
    let result = await Auth.currentUserInfo();
    return {result:result, success: true}
  }
  catch(error){
    return {error:error, success: false}
  }
}

export const signOut = async () => {
  try {
    await Auth.signOut();
    return {success: true}

  } catch (error) {
    console.log('error signing out: ', error);
    return {success: false}
  }
}