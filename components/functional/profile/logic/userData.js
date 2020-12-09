import {sendModificationData} from "../communication/fetchUserData";
import {getAccessToken} from "../../api/storedTokens";
import {userMockData} from "../../../redux_components/mock";

const expected_status = 200;

export const userData = async () => {
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

export const fetchUserData =  () => {
    return userMockData;
}
