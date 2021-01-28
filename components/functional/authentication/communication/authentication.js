import {post} from "../../api/fetchBuilder";

export const sendLoginData = (email, password) => {
  return post("/token/",{email:email, password:password});
};
export const sendAppUserToken = (user_token) =>{
  return post("/users/login/token",{},user_token)
}

export const sendRegisterData = (email, password) => {
  return post("/accounts/api/register/",{email:email, password:password});
}

export const sendGoogleUserToken = (user_token) => {
  return post("/users/login/facebook",{},user_token);
};

export const sendFacebookUserToken = (user_token) => {
  return post("/users/login/google",{},user_token);
}

export const sendRefreshToken = (refresh_token) => {
  return post ("/token/refresh", {refresh: refresh_token})
}
