import {
    getAccessToken, getRefreshToken,
    setAccessToken,
    setRefreshToken
} from "../../api/storedTokens";
import {getSurveys} from "../communication/survey";

export const getUserSurveys = async () =>{
    let user_token = await getAccessToken();
    let response = await getSurveys(user_token);
    console.log(response);
    return response;
}