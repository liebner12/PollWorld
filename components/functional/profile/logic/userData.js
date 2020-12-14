import {getUserData, putUserData} from "../communication/fetchUserData";
import {getAccessToken} from "../../api/storedTokens";
import {userMockData} from "../../../redux_components/mock";
import {fetchSurveysForUser} from "../../surveys/communication/fetchSurveys";


export const getUserDataForUser = async (user_token) => {
    let response =  await getUserData(user_token)
    return response.response_body.data}

export const putUserDataForUser = async (user_token, body) => {
    let response = await putUserData(user_token, body)
    return response
}

export const fetchUserData =  () => {
    return userMockData;
}
