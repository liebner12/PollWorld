import {post,get} from "../../api/fetchBuilder";

export const fetchSurveysForUser = (user_token) =>{
    return get("/polls/all/",user_token)
}
