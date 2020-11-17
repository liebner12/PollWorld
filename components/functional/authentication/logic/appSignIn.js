import {
  sendRegisterData,
  sendLoginData,
} from "../communication/authentication";
import {
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../../api/storedTokens";

const expected_status = 200;

export const createAccount = async (email, password) => {
  let response = await sendRegisterData(email, password);
  console.log(response.response_headers.get("content-type"));
  console.log(response.response_body);
  console.log(response.response_status);

  if (response.response_status === expected_status) {
    await sendLoginData(email, password);
    //Wysztko poszło dobrze, dostaliśmy pozytywną odpowiedź od serwera, automatycznie logujemy
  } else {
    //TODO coś poszło nie tak, wyświetl alert o błędzie.
  }
  return response.response_status;
};

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
    console.log(getRefreshToken());
    //TODO przejdź do dalszego etapu
  } else {
    //TODO wyświetl komunikat o statusie błędu w jakimś alercie,
  }
  return response.response_status;
};
