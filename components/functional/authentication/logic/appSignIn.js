import {
  sendRegisterData,
  sendLoginData, sendFacebookUserToken, sendGoogleUserToken,
} from "../communication/authentication";
import {
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../../api/storedTokens";
import {getFacebookUserToken, getGoogleUserToken} from "./socialMediaSignIn";

const expected_status = 200;

export const createAccount = async (email, password) => {
  let response = await sendRegisterData(email, password);
  console.log(response.response_headers.get("content-type"));
  console.log(response.response_body);
  console.log(response.response_status);

  if (response.response_status === expected_status) {
    return login(email,password);
    //Wysztko poszło dobrze, dostaliśmy pozytywną odpowiedź od serwera, automatycznie logujemy
  }
  return response.response_status;
};

export const signInWithFacebook = async () =>{
  let user_token = await getFacebookUserToken();
  //let response = await sendFacebookUserToken(user_token);
  console.log("Zalogowano przez fb");
  console.log(user_token);
  return expected_status;
//  return response.response_status;
}

export const signInWithGoogle = async () =>{
  let user_token = await getGoogleUserToken();
  //let response = await sendGoogleUserToken(user_token);
  console.log("Zalogowano przez googla");
  console.log(user_token);
  return expected_status;
 // return response.response_status;
}

export const login = async (email, password) => {
  let response = await sendLoginData(email, password);
  console.log(response.response_headers.get("content-type"));
  console.log(response.response_body.refresh);
  console.log(response.response_body.access);
  console.log(response.response_body.user);
  console.log(response.response_status);
  if (response.response_status === expected_status) {
    await setAccessToken(response.response_body.access);
    await setRefreshToken(response.response_body.refresh);
    //console.log(getRefreshToken());
    //TODO przejdź do dalszego etapu
  }
  return response.response_status;
};
