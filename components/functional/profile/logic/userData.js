import {getUserData, putUserData} from "../communication/fetchUserData";
import {getAccessToken} from "../../api/storedTokens";
import {userMockData} from "../../../redux_components/mock";
import {fetchSurveysForUser} from "../../surveys/communication/fetchSurveys";


export const getUserDataForUser = async (user_token) => {
    return  (await getUserData(user_token)).response_body}

export const putUserDataForUser = async (user_token, body) => {
    let response = await putUserData(user_token, body)
    console.log("RESPONSE", response)
    return response
}

export const fetchUserData =  () => {
    return userMockData;
}
