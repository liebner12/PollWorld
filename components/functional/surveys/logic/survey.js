import {mockCouponsToBuy, mockOwnedCoupons, mockUserPoints} from "../../../redux_components/mock";
import {fetchSurveysForUser, getSurveyWithId, postAnswersForSurvey} from "../communication/fetchSurveys";
import {getAccessToken} from "../../api/storedTokens";


export const getSurveysForUser = async (user_token) => {
    return (await fetchSurveysForUser(user_token)).response_body
}

export const getQuestionsForSurvey = async (survey_id) =>{
    let user_token = await getAccessToken()
    let questions = await getSurveyWithId(user_token, survey_id)
    console.log(questions.response_status)
    return questions.response_body.questions
}
export const sendAnswersForSurvey = async (survey_id, answers) =>{
    let user_token = await getAccessToken()
    return await postAnswersForSurvey(user_token, survey_id, JSON.stringify(answers)).response_status
}

export const getOwnedCoupons = (user_token) => {
    return mockOwnedCoupons;
}

export const getCouponsToBuy = (user_token) => {
    return mockCouponsToBuy
}

export const getUserPoints = (user_token) => {
    return mockUserPoints

}
