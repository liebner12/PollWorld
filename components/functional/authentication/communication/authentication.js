import {post} from "../../api/fetchBuilder";
import {performRequest} from "../../api/refreshToken";

export const sendLoginData = (email, password) => {
  return performRequest(post, "/token/",{email:email, password:password});
};

export const sendAppUserToken = (user_token) =>{
  return performRequest(post, "/users/login/token",{},user_token);
}

export const sendRegisterData = (email, password) => {
  return performRequest(post,"/accounts/register/",{email:email, password:password});
}

export const sendGoogleUserToken = (user_token) => {
  return performRequest(post, "/users/login/facebook",{},user_token);
};

export const sendFacebookUserToken = (user_token) => {
  return performRequest(post,"/users/login/google",{},user_token);
}

