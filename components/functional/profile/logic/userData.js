import {getUserData, putUserData} from "../communication/fetchUserData";
import {userMockData} from "../../../redux_components/mock";

export const getUserDataForUser = async (user_token) => {
    let response = await getUserData(user_token)
    return response.response_body
}

export const putUserDataForUser = async (user_token, body) => {
    return await putUserData(user_token, body)
}

export const fetchUserData =  () => {
    return userMockData;
}
