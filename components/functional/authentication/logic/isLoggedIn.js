import {sendAppUserToken} from "../communication/authentication";
import {getRefreshToken, getAccessToken} from "../../api/storedTokens";

const expected_status = 200;

export const autoLogin = () => {
    let refresh_token = getRefreshToken();
    let accessToken = getAccessToken();
    let response = sendAppUserToken();
    if(response.status === expected_status){
        //TODO Zadziałało, zalogowaliśmy sie do aplikacji, wyświetl home.
    }
    else{
        //TODO Dostaliśmy errora, niemożliwe jest autologowanie, wyświetl ekran logowania
        console.log("error", response.status)
    }
}