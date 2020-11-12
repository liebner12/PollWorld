import { post } from "../../api/fetchBuilder";

export const expected_status = 201;

export const sendLoginData = (email, password) => {
  return post("/users/login", {
    user: { email, password },
  });
};
export const sendAppUserToken = (user_token) =>{
  return post("/users/login/token",{},user_token)
}

export const sendRegisterData = (email, password) => {
  return post("/users", {
    user: { email, password },
  })}

export const sendGoogleUserToken = (user_token) => {
  return post("/users/login/facebook",{},user_token);
};

export const sendFacebookUserToken = (user_token) => {
  return post("/users/login/google",{},user_token);
}