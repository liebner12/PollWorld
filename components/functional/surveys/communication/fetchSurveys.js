import {post,get} from "../../api/fetchBuilder";
import {performRequest} from "../../api/refreshToken";

export const fetchSurveysForUser = (user_token) =>{
    return performRequest(get,"/polls/all/",null,user_token)
}

export const getSurveyWithId= (user_token, survey_id) =>{
    return performRequest(get,"/polls/"+survey_id+"/",null, user_token)
}

export const postAnswersForSurvey = (user_token, survey_id, answers) =>{
    return performRequest(post,"/polls/"+survey_id+"/",answers,user_token)
}

export const getAllOwnedCoupons = (user_token) =>{
    return performRequest(get, '/copouns/allOwned/',null,user_token)
}

export const postCouponBuy = (user_token, coupon_id) =>{
    return performRequest(post, '/copouns/'+coupon_id+"/",{},user_token)
}

export const getAllCouponsToBuy = (user_token) =>{
    return performRequest(get, '/copouns/all/',null,user_token)
}
