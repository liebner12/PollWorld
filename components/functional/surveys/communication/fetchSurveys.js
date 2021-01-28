import {post,get} from "../../api/fetchBuilder";

export const fetchSurveysForUser = (user_token) =>{
    return get("/polls/all/",user_token)
}

export const getSurveyWithId= (user_token, survey_id) =>{
    return get("/polls/"+survey_id+"/", user_token)
}

export const postAnswersForSurvey = (user_token, survey_id, answers) =>{
    return post("/polls/"+survey_id+"/",answers,user_token)
}
