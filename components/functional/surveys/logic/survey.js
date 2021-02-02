import {mockCouponsToBuy, mockOwnedCoupons, mockUserPoints, welcomeCoupon} from "../../../redux_components/mock";
import {
    fetchSurveysForUser,
    getAllCouponsToBuy, getAllOwnedCoupons,
    getSurveyWithId,
    postAnswersForSurvey,
    postCouponBuy
} from "../communication/fetchSurveys";
import {getAccessToken} from "../../api/storedTokens";


export const getSurveysForUser = async (user_token) => {
    return (await fetchSurveysForUser(user_token)).response_body
}

export const getQuestionsForSurvey = async (survey_id) =>{
    let user_token = await getAccessToken()
    let questions = await getSurveyWithId(user_token, survey_id)
    return questions.response_body.questions
}

export const buyCoupon = async (coupon_id) =>{
    let user_token = await getAccessToken()
    let response = await postCouponBuy(user_token, coupon_id)
    console.log("BAJKUPON",response)
    return response
}

export const sendAnswersForSurvey = async (survey_id, answers) =>{
    let user_token = await getAccessToken()
    let response = await postAnswersForSurvey(user_token, survey_id, answers)
    return response
}

export const getOwnedCoupons = async (user_token) => {
    let response = await getAllOwnedCoupons(user_token)
    if(response.response_body.length === 0){
        return welcomeCoupon
    }
    else{
    return await response.response_body
    }
}

export const getCouponsToBuy = async (user_token) => {
    let response = await getAllCouponsToBuy(user_token)
    return await response.response_body
}

export const getWelcomeCoupon = () =>{
    return welcomeCoupon
}
export const getUserPoints = (user_token) => {
    return mockUserPoints

}
