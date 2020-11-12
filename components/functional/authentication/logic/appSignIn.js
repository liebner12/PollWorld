import {getToken, setToken} from "../../api/storedToken";
import {sendRegisterData, sendLoginData, expected_status} from "../communication/authentication";

export const createAccount = (email, password) => {
    let response = sendRegisterData(email,password);
    let token_value = JSON.stringify(response.headers.get('authorization'));
    if(response.status === expected_status){
        setToken(token_value)
        //TODO Przejście do kolejnego etapu rejestracji
    }
    else{
        //TODO Dostaliśmy errora, wyświetl komunikat, wróć do ekranu rejestracji
        console.log("error", response.status)
    }
}

export const login = (email, password) => {
    let response = sendLoginData(email,password);
    let token_value = JSON.stringify(response.headers.get('authorization'));
    if(response.status === expected_status){
        setToken(token_value)
    }
    else{
        //TODO Dostaliśmy errora, wyświetl komunikat
        console.log("error", response.status)
    }
}