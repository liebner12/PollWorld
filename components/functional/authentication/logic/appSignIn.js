import React, {useEffect} from "react"
import {
  sendRegisterData,
  sendLoginData,
  sendFacebookUserToken,
  sendGoogleUserToken,
} from "../communication/authentication";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken, setUser,
} from "../../api/storedTokens";
import {getFacebookUserToken, getGoogleUserToken} from "./socialMediaSignIn";
const expected_status = 200;



export const createAccount = async (email, password) => {
  let response = await sendRegisterData(email, password);

  if (response.response_status === expected_status) {
    console.log("Bedzie teraz wszystko wysylane")
    return await login(email,password);
    //Wysztko poszło dobrze, dostaliśmy pozytywną odpowiedź od serwera, automatycznie logujemy
  }
  return await response.response_status;
};

export const signInWithFacebook = async () => {
  let user_token = await getFacebookUserToken();
  //let response = await sendFacebookUserToken(user_token);
  console.log("Zalogowano przez fb");
  console.log(user_token);
  return expected_status;
  //  return response.response_status;
};

export const signInWithGoogle = async () => {
  let user_token = await getGoogleUserToken();
  //let response = await sendGoogleUserToken(user_token);
  console.log("Zalogowano przez googla");
  console.log(user_token);
  return expected_status;
  // return response.response_status;
};

export const login = async (email, password) => {
  let response = await sendLoginData(email, password);
  let accessToken = ""
  let refreshToken = ""
  let userEmail = ""
  if (response.response_status === expected_status) {
    accessToken = response.response_body.access
    refreshToken = response.response_body.refresh
    userEmail = response.response_body.user

    await setUser(userEmail)
    await setAccessToken(accessToken);
    await setRefreshToken(refreshToken);
  }
    return response.response_status;
};


