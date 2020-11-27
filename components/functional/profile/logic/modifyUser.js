import {sendModificationData} from "../communication/userModification";
import {getAccessToken} from "../../api/storedTokens";

const expected_status = 200;

export const modifyUser = async () => {
    let response = await sendModificationData(await getAccessToken());
    console.log(response.response_headers.get("content-type"));
    console.log(response.response_body);
    console.log(response.response_status);

    if (response.response_status === expected_status) {
        console.log(response)
        //Wysztko poszło dobrze, dostaliśmy pozytywną odpowiedź od serwera, automatycznie logujemy
    }
    return response.response_status;
};
