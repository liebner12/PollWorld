import {expected_status, sendAppUserToken, } from "../communication/authentication";
import {getToken} from "../../api/storedTokens";

export const autoLogin = () => {
    let user_token = getToken();
    let response = sendAppUserToken(user_token);
    if(response.status === expected_status){
        //TODO Zadziałało, zalogowaliśmy sie do aplikacji
    }
    else{
        //TODO Dostaliśmy errora, wyświetl komunikat
        console.log("error", response.status)
    }
}